import React, { useEffect } from "react";
import { ITodo } from "@shared/interfaces";
import { useTodoStore } from "@/store/todoStore";
import { StyledTodoEdit } from "./styles";
import { Form } from "antd";
import { TodoTitle } from "./TodoTitle";
import { TodoDescription } from "./TodoDescription";
import { TodoStatus } from "./TodoStatus";
import { SaveBtn } from "./SaveBtn";

export const TodoEditForm: React.FC = () => {
  const { todos, editTodo } = useTodoStore();

  const [form] = Form.useForm();

  useEffect(() => {
    const selectedTodo = todos.find((todo: ITodo) => todo.attributes.selected);

    if (!selectedTodo) {
      form.setFieldsValue({
        title: "",
        description: "",
        status: "",
      });
    } else {
      form.setFieldsValue({
        title: selectedTodo.attributes.title,
        description: selectedTodo.attributes.description,
        status:
          (selectedTodo.attributes.status === "Выполнена" && "Выполнена") ||
          (selectedTodo.attributes.status === "Избранное" && "Избранное") ||
          "Не выполнена",
      });
    }
  }, [todos]);

  const handleFormSubmit = (values: any): void => {
    editTodo(values);
  };

  return (
    <StyledTodoEdit>
      <Form form={form} onFinish={handleFormSubmit}>
        <Form.Item name="title">
          <TodoTitle props />
        </Form.Item>
        <Form.Item name="description">
          <TodoDescription props />
        </Form.Item>
        <div className="controls-container">
          <Form.Item name="status">
            <TodoStatus props />
          </Form.Item>
          <Form.Item>
            <SaveBtn props />
          </Form.Item>
        </div>
      </Form>
    </StyledTodoEdit>
  );
};
