import React from 'react';
import { StyledSelect } from './styles';

interface TodoStatusProps {
  value?: string;
  onChange?: () => void;
  id?: string;
}

export const TodoStatus: React.FC<TodoStatusProps> = ({
  value,
  onChange,
  id,
}) => {
  return (
    <StyledSelect
      options={[
        { value: 'Не выполнена', label: 'Не выполнена' },
        { value: 'Выполнена', label: 'Выполнена' },
        { value: 'Избранное', label: 'Избранное' },
      ]}
      value={value}
      onChange={onChange}
      id={id}
    />
  );
};
