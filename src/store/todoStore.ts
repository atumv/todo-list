import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Todo, EditFormValues } from '@shared/interfaces';
import { API_URL } from '@shared/constants/api';

interface TodoState {
  todos: Todo[];
  allTodos: Todo[];
  completedTodos: Todo[];
  uncompletedTodos: Todo[];
  favoriteTodos: Todo[];
  currentPage: number;
  pageCount: number;
  allTodosSelected: boolean;
  loading: boolean;
  TodoListFilterValue: string;
  fetchTodos: () => void;
  addTodo: (title: string) => void;
  selectTodo: (index: number) => void;
  editTodo: (values: EditFormValues) => void;
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
      completedTodos: [],
      uncompletedTodos: [],
      favoriteTodos: [],
      currentPage: 0,
      pageCount: 0,
      allTodosSelected: true,
      loading: false,
      TodoListFilterValue: '',

      async fetchTodos() {
        try {
          set({ loading: true });
          const response = await fetch(`${API_URL}?_page=1&_per_page=25`);
          const result = await response.json();
          set({ currentPage: result.first });
          set({ pageCount: result.pages });
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

      selectTodo(index) {
        const todosWithOneSelected = get().todos.map(
          (todo: Todo, idx: number) => {
            idx === index
              ? (todo.attributes.selected = true)
              : (todo.attributes.selected = false);
            return todo;
          }
        );

        set({ todos: todosWithOneSelected });
      },

      editTodo(values) {
        const { title, description, status } = values;

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
        const todos = get().todos.filter((todo: Todo) => todo.id !== id);
        const allTodos = get().allTodos.filter((todo: Todo) => todo.id !== id);
        const completedTodos = get().completedTodos.filter(
          (todo: Todo) => todo.id !== id
        );
        const uncompletedTodos = get().uncompletedTodos.filter(
          (todo: Todo) => todo.id !== id
        );
        const favoriteTodos = get().favoriteTodos.filter(
          (todo: Todo) => todo.id !== id
        );

        set({ todos: todos });
        set({ allTodos: allTodos });
        set({ completedTodos: completedTodos });
        set({ uncompletedTodos: uncompletedTodos });
        set({ favoriteTodos: favoriteTodos });
      },

      async loadMoreTodos() {
        if (get().allTodosSelected && get().currentPage < get().pageCount) {
          set({ currentPage: get().currentPage + 1 });
          const response = await fetch(
            `${API_URL}?_page=${get().currentPage}&_per_page=25`
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
        set({ completedTodos: completedTodos });
        set({ todos: get().completedTodos });
        set({ allTodosSelected: false });
        set({ TodoListFilterValue: 'Выполненные' });
      },

      showUncompletedTodos() {
        const uncompletedTodos = get().allTodos.filter(
          (todo: Todo) => todo.attributes.status === 'uncompleted'
        );
        set({ uncompletedTodos: uncompletedTodos });
        set({ todos: get().uncompletedTodos });
        set({ allTodosSelected: false });
        set({ TodoListFilterValue: 'Не выполненные' });
      },

      showFavoriteTodos() {
        const favoriteTodos = get().allTodos.filter(
          (todo: Todo) => todo.attributes.status === 'favorite'
        );
        set({ favoriteTodos: favoriteTodos });
        set({ todos: get().favoriteTodos });
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
