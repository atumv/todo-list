import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ITodo } from "@shared/interfaces";
import { API_URL } from "@shared/constants/api";

export const useTodoStore = create<any>()(
  persist(
    (set, get) => ({
      todos: [],
      allTodos: [],
      completedTodos: [],
      uncompletedTodos: [],
      favoriteTodos: [],
      currentPage: 1,
      pageCount: 0,
      allTodosSelected: true,
      loading: false,
      TodoListFilterValue: "",

      fetchTodos: async () => {
        try {
          set(() => ({ loading: true }));
          const response = await fetch(`${API_URL}?pagination[page]=1`);
          const result = await response.json();
          set(() => ({ currentPage: result.meta.pagination.page }));
          set(() => ({ pageCount: result.meta.pagination.pageCount }));
          set(() => ({ todos: result.data }));
          set(() => ({ allTodos: result.data }));
          set(() => ({ loading: false }));
        } catch {
          set(() => ({ loading: false }));
          console.error("Failed to fetch data.");
        }
      },

      addTodo: (title: string): void => {
        set((state: any) => ({
          todos: state.todos.map((todo: ITodo) => {
            todo.attributes.selected = false;
            return todo;
          }),
        }));

        const newTodo = {
          id: Date.now(),
          attributes: {
            status: "Не выполнена",
            title,
            description: "",
            selected: true,
          },
        };

        set((state: any) => ({ todos: [newTodo, ...state.todos] }));
        set((state: any) => ({ allTodos: state.todos }));
      },

      selectTodo: (index: number): void => {
        set((state: any) => ({
          todos: state.todos.map((todo: ITodo, idx: number) => {
            idx === index
              ? (todo.attributes.selected = true)
              : (todo.attributes.selected = false);
            return todo;
          }),
        }));
      },

      editTodo: (values: any): void => {
        const { title, description, status } = values;

        set((state: any) => ({
          todos: state.todos.map((todo: ITodo) => {
            if (todo.attributes.selected) {
              todo.attributes.title = title;
              todo.attributes.description = description;
              todo.attributes.status = status;
            }
            return todo;
          }),
        }));

        set((state: any) => ({
          allTodos: state.todos,
        }));
      },

      removeTodo: (id: number): void => {
        set((state: any) => ({
          todos: state.todos.filter((todo: ITodo) => todo.id !== id),
          allTodos: state.allTodos.filter((todo: ITodo) => todo.id !== id),
          completedTodos: state.completedTodos.filter(
            (todo: ITodo) => todo.id !== id
          ),
          uncompletedTodos: state.uncompletedTodos.filter(
            (todo: ITodo) => todo.id !== id
          ),
          favoriteTodos: state.favoriteTodos.filter(
            (todo: ITodo) => todo.id !== id
          ),
        }));
      },

      loadMoreTodos: async () => {
        const response = await fetch(
          `${API_URL}?pagination[page]=${get().currentPage}`
        );
        const result = await response.json();
        const newTodos = result.data;
        set((state: any) => ({
          currentPage: state.currentPage + 1,
        }));
        set((state: any) => ({
          todos: [...state.todos, ...newTodos],
        }));

        set((state: any) => ({
          allTodos: state.todos,
        }));
      },

      showAllTodos: () => {
        set((state: any) => ({ todos: state.allTodos }));
        set(() => ({
          isAllTodosSelected: true,
        }));
        set(() => ({
          TodoListFilterValue: "Все",
        }));
      },

      showCompletedTodos: () => {
        set((state: any) => ({
          completedTodos: state.allTodos.filter(
            (todo: any) => todo.attributes.status === "Выполнена"
          ),
        }));
        set((state: any) => ({ todos: state.completedTodos }));
        set(() => ({
          isAllTodosSelected: false,
        }));
        set(() => ({
          TodoListFilterValue: "Выполненные",
        }));
      },

      showUncompletedTodos: () => {
        set((state: any) => ({
          uncompletedTodos: state.allTodos.filter(
            (todo: ITodo) => todo.attributes.status === "Не выполнена"
          ),
        }));
        set((state: any) => ({ todos: state.uncompletedTodos }));
        set(() => ({
          isAllTodosSelected: false,
        }));
        set(() => ({
          TodoListFilterValue: "Не выполненные",
        }));
      },

      showFavoriteTodos: () => {
        set((state: any) => ({
          favoriteTodos: state.allTodos.filter(
            (todo: ITodo) => todo.attributes.status === "Избранное"
          ),
        }));
        set((state: any) => ({ todos: state.favoriteTodos }));
        set(() => ({
          isAllTodosSelected: false,
        }));
        set(() => ({
          TodoListFilterValue: "Избранное",
        }));
      },
    }),
    {
      name: "todos-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
