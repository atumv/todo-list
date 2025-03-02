import React from 'react';
import { Todo } from 'shared/interfaces';
import { useTodoStore } from '@/store/todoStore';
import { StyledTodoItem } from './styles';

interface TodoItemProps {
  todo: Todo;
  index: number;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, index }) => {
  const { selectTodo, removeTodo } = useTodoStore();

  return (
    <StyledTodoItem>
      <li className="todo-list__item todo-item">
        <div className="todo-item__checkbox-wrap">
          <input
            className="todo-item__checkbox"
            type="checkbox"
            checked={todo.attributes.selected || false}
            onChange={() => selectTodo(index)}
          />
          <span className="todo-item__number">{index + 1}</span>
          <span
            className={
              (todo.attributes.status === 'Избранное' &&
                'todo-item__title todo-item__title--blue') ||
              (todo.attributes.status === 'Выполнена' &&
                'todo-item__title todo-item__title--green') ||
              'todo-item__title todo-item__title--grey'
            }
          >
            {todo.attributes.title}
          </span>
        </div>
        <button
          className="todo-item__remove-btn remove-btn"
          onClick={() => removeTodo(todo.id)}
        >
          &times;
        </button>
      </li>
    </StyledTodoItem>
  );
};
