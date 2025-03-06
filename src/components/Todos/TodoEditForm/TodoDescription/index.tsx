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
    autoSize={{ minRows: 11, maxRows: 11 }}
    value={value}
    onChange={onChange}
    id={id}
  />
);
