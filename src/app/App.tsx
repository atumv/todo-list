import React, { useEffect } from "react";
import { useTodoStore } from "@/store/todoStore";
import { StyledApp } from "./styles";
import { GlobalStyles } from "@/styles/GlobalStyles";
import { Header } from "@components/Header";
import { TodoAddForm } from "@components/TodoAddForm";
import { Todos } from "@components/Todos";

const App: React.FC = () => {
  const { todos, fetchTodos, showAllTodos } = useTodoStore();

  useEffect(() => {
    if (!todos.length) fetchTodos();
    showAllTodos();
  }, []);

  return (
    <StyledApp>
      <GlobalStyles />
      <Header />
      <TodoAddForm />
      <Todos />
    </StyledApp>
  );
};

export default App;
