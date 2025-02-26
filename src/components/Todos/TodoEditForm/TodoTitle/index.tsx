import React from "react";
import { StyledTodoTitle } from "./styles";

interface TodoTitleProps {
  props: boolean;
}

export const TodoTitle: React.FC<TodoTitleProps> = (props) => (
  <StyledTodoTitle {...props} />
);
