import React from "react";
import { TodoList } from "./TodoList";
import { TodoEditForm } from "./TodoEditForm";
import { StyledTodos } from "./styles";

export const Todos: React.FC = () => (
  <StyledTodos>
    <TodoList />
    <TodoEditForm />
  </StyledTodos>
);
