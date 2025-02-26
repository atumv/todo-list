import React from "react";
import { StyledSaveBtn } from "./styles.ts";

interface saveBtnProps {
  props: boolean;
}

export const SaveBtn: React.FC<saveBtnProps> = (props) => (
  <StyledSaveBtn type="primary" htmlType="submit" {...props}>
    Сохранить
  </StyledSaveBtn>
);
