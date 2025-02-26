import React from "react";
import { useTodoStore } from "@/store/todoStore";
import { StyledSelect } from "./styles";

export const TodoListFilter: React.FC = () => {
  const {
    showAllTodos,
    showCompletedTodos,
    showUncompletedTodos,
    showFavoriteTodos,
    TodoListFilterValue,
  } = useTodoStore();

  const handleChange = (value: string): void => {
    if (value === "Все") {
      showAllTodos();
    } else if (value === "Выполненные") {
      showCompletedTodos();
    } else if (value === "Не выполненные") {
      showUncompletedTodos();
    } else if (value === "Избранное") {
      showFavoriteTodos();
    }
  };

  return (
    <StyledSelect
      value={TodoListFilterValue}
      onChange={handleChange}
      options={[
        { value: "Все", label: "Все" },
        { value: "Выполненные", label: "Выполненные" },
        { value: "Не выполненные", label: "Не выполненные" },
        { value: "Избранное", label: "Избранное" },
      ]}
    />
  );
};
