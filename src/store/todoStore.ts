import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Todo, EditForm } from '@shared/interfaces';
import { API_URL } from '@shared/constants/api';

interface TodoState {
  todos: Todo[];
  allTodos: Todo[];
  page: number;
  lastPage: number;
  allTodosSelected: boolean;
  loading: boolean;
  TodoListFilterValue: string;
  fetchTodos: () => void;
  addTodo: (title: string) => void;
  selectTodo: (id: number) => void;
  editTodo: (form: EditForm) => void;
  removeTodo: (id: number) => void;
  loadMoreTodos: () => void;
  showAllTodos: () => void;
  showCompletedTodos: () => void;
  showUncompletedTodos: () => void;
  showFavoriteTodos: () => void;
}

export const useTodoStore = create<TodoState>()(
  persist(
    (set, get) => ({
      todos: [],
      allTodos: [],
      page: 0,
      lastPage: 0,
      allTodosSelected: true,
      loading: false,
      TodoListFilterValue: '',

      async fetchTodos() {
        try {
          set({ loading: true });
          const response = await fetch(`${API_URL}?_page=1&_per_page=25`);
          const result = await response.json();
          set({ page: result.first });
          set({ lastPage: result.last });
          set({ todos: result.data });
          set({ allTodos: result.data });
          set({ loading: false });
        } catch {
          set({ loading: false });
        }
      },

      addTodo(title) {
        const unselectedTodos = get().todos.map((todo: Todo) => {
          todo.attributes.selected = false;
          return todo;
        });

        set({ todos: unselectedTodos });

        const newTodo = {
          id: Date.now(),
          attributes: {
            status: 'uncompleted',
            title,
            description: '',
            selected: true,
          },
        };

        set({ todos: [newTodo, ...get().todos] });
        set({ allTodos: get().todos });
      },

      selectTodo(id) {
        set({
          todos: get().todos.map((todo: Todo) => {
            todo.id === id
              ? (todo.attributes.selected = true)
              : (todo.attributes.selected = false);
            return todo;
          }),
        });
        set({
          allTodos: get().allTodos.map((todo: Todo) => {
            todo.id === id
              ? (todo.attributes.selected = true)
              : (todo.attributes.selected = false);
            return todo;
          }),
        });
      },

      editTodo(form) {
        const { title, description, status } = form;

        const todosWithOneChanged = get().allTodos.map((todo: Todo) => {
          if (todo.attributes.selected) {
            todo.attributes.title = title;
            todo.attributes.description = description;
            todo.attributes.status = status;
          }
          return todo;
        });

        set({ allTodos: todosWithOneChanged });
      },

      removeTodo(id) {
        const allTodos = get().allTodos.filter((todo: Todo) => todo.id !== id);
        const todos = get().todos.filter((todo: Todo) => todo.id !== id);
        set({ allTodos: allTodos });
        set({ todos: todos });
      },

      async loadMoreTodos() {
        if (get().allTodosSelected && get().page !== get().lastPage) {
          set({ page: ++get().page });
          const response = await fetch(
            `${API_URL}?_page=${get().page}&_per_page=25`
          );
          const result = await response.json();
          const newTodos = result.data;
          set({ todos: [...get().todos, ...newTodos] });
          set({ allTodos: get().todos });
        }
      },

      showAllTodos() {
        set({ todos: get().allTodos });
        set({ allTodosSelected: true });
        set({ TodoListFilterValue: 'Все' });
      },

      showCompletedTodos() {
        const completedTodos = get().allTodos.filter(
          (todo: Todo) => todo.attributes.status === 'completed'
        );
        set({ todos: completedTodos });
        set({ allTodosSelected: false });
        set({ TodoListFilterValue: 'Выполненные' });
      },

      showUncompletedTodos() {
        const uncompletedTodos = get().allTodos.filter(
          (todo: Todo) => todo.attributes.status === 'uncompleted'
        );
        set({ todos: uncompletedTodos });
        set({ allTodosSelected: false });
        set({ TodoListFilterValue: 'Не выполненные' });
      },

      showFavoriteTodos() {
        const favoriteTodos = get().allTodos.filter(
          (todo: Todo) => todo.attributes.status === 'favorite'
        );
        set({ todos: favoriteTodos });
        set({ allTodosSelected: false });
        set({ TodoListFilterValue: 'Избранное' });
      },
    }),
    {
      name: 'todos-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
