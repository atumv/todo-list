import React from 'react';
import { StyledFormContainer } from './styles';
import { Form, Space, Button, Input } from 'antd';
import { useTodoStore } from '@/store/todoStore';

export const TodoAddForm: React.FC = () => {
  const { addTodo, showAllTodos } = useTodoStore();

  const [form] = Form.useForm();

  const handleFormSubmit = ({ input }: { input: string }): void => {
    showAllTodos();
    if (input.trim()) addTodo(input);
    form.resetFields();
  };

  return (
    <StyledFormContainer>
      <div className="form-container">
        <Form form={form} onFinish={handleFormSubmit}>
          <Space.Compact>
            <Form.Item name="input">
              <Input
                type="text"
                placeholder="Что нужно сделать?"
                size="large"
              />
            </Form.Item>
            <Form.Item name="button">
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                data-testid="addButton"
              >
                <span className="add-btn__plus">&times;</span>
                Добавить
              </Button>
            </Form.Item>
          </Space.Compact>
        </Form>
      </div>
    </StyledFormContainer>
  );
};
