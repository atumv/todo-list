import React from "react";
import { StyledFormContainer } from "./styles";
import { Form, Space, Button, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useTodoStore } from "@/store/todoStore";

export const TodoAddForm: React.FC = () => {
  const { addTodo, showAllTodos } = useTodoStore();

  const [form] = Form.useForm();

  const handleFormSubmit = ({ input }: any): void => {
    showAllTodos();
    const inputValue = input;
    if (inputValue) addTodo(inputValue);
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
              <Button type="primary" size="large" htmlType="submit">
                <PlusOutlined />
                Добавить
              </Button>
            </Form.Item>
          </Space.Compact>
        </Form>
      </div>
    </StyledFormContainer>
  );
};
