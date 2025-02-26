import React from "react";
import { StyledNoTasksMsg } from "./styles";

export const NoTasksMsg: React.FC = () => (
  <StyledNoTasksMsg>
    Список задач пуст.
    <br />
    Добавьте задачу чтобы начать работу.
  </StyledNoTasksMsg>
);
