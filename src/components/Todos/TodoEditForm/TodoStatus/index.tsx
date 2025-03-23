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
        { value: 'uncompleted', label: 'Не выполнена' },
        { value: 'completed', label: 'Выполнена' },
        { value: 'favorite', label: 'Избранное' },
      ]}
      value={value ? value : 'Статус задачи'}
      onChange={onChange}
      id={id}
      data-testid="todoStatus"
    />
  );
};
