import React from 'react';
import { StyledTodoTitle } from './styles';

interface TodoTitleProps {
  value?: string;
  onChange?: () => void;
  id?: string;
}

export const TodoTitle: React.FC<TodoTitleProps> = ({
  value,
  onChange,
  id,
}) => {
  return (
    <StyledTodoTitle
      value={value}
      onChange={onChange}
      id={id}
      data-testid="todoTitle"
    />
  );
};
