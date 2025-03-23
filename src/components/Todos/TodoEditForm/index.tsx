import React, { useEffect } from 'react';
import { Todo, EditForm } from '@shared/interfaces';
import { useTodoStore } from '@/store/todoStore';
import { StyledTodoEdit } from './styles';
import { Form } from 'antd';
import { TodoTitle } from './TodoTitle';
import { TodoDescription } from './TodoDescription';
import { TodoStatus } from './TodoStatus';
import { SaveBtn } from './SaveBtn';

export const TodoEditForm: React.FC = () => {
  const { todos, editTodo } = useTodoStore();

  const [form] = Form.useForm();

  useEffect(() => {
    const selectedTodo = todos.find((todo: Todo) => todo.attributes.selected);

    if (!selectedTodo) {
      form.setFieldsValue({
        title: '',
        description: '',
        status: '',
      });
    } else {
      form.setFieldsValue({
        title: selectedTodo.attributes.title,
        description: selectedTodo.attributes.description,
        status:
          (selectedTodo.attributes.status === 'completed' && 'Выполнена') ||
          (selectedTodo.attributes.status === 'favorite' && 'Избранное') ||
          'Не выполнена',
      });
    }
  }, [todos]);

  const handleFormSubmit = (form: EditForm): void => {
    editTodo(form);
  };

  return (
    <StyledTodoEdit>
      <Form form={form} onFinish={handleFormSubmit}>
        <Form.Item name="title">
          <TodoTitle />
        </Form.Item>
        <Form.Item name="description">
          <TodoDescription />
        </Form.Item>
        <div className="controls-container">
          <Form.Item name="status">
            <TodoStatus />
          </Form.Item>
          <Form.Item>
            <SaveBtn />
          </Form.Item>
        </div>
      </Form>
    </StyledTodoEdit>
  );
};
