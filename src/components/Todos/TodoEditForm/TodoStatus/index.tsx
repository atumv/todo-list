import React from "react";
import { StyledSelect } from "./styles";

interface StatusSelectProps {
  props: boolean;
}

export const TodoStatus: React.FC<StatusSelectProps> = (props) => {
  return (
    <StyledSelect
      options={[
        { value: "Не выполнена", label: "Не выполнена" },
        { value: "Выполнена", label: "Выполнена" },
        { value: "Избранное", label: "Избранное" },
      ]}
      {...props}
    />
  );
};
