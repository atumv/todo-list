import React from 'react';
import { StyledTodoDescription } from './styles';

interface TodoDescriptionProps {
  value?: string;
  onChange?: () => void;
  id?: string;
}

export const TodoDescription: React.FC<TodoDescriptionProps> = ({
  value,
  onChange,
  id,
}) => (
  <StyledTodoDescription
    style={{ height: 300, resize: 'none' }}
    value={value}
    onChange={onChange}
    id={id}
    data-testid="todoDescription"
  />
);
