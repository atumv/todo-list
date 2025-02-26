import React from "react";
import { StyledTodoDescription } from "./styles";

interface TodoDescriptionProps {
  props: boolean;
}

export const TodoDescription: React.FC<TodoDescriptionProps> = (props) => (
  <StyledTodoDescription autoSize={{ minRows: 11, maxRows: 11 }} {...props} />
);
