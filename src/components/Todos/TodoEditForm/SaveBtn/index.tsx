import React from 'react';
import { StyledSaveBtn } from './styles.ts';

interface SaveBtnProps {
  value?: string;
  onChange?: () => void;
  id?: string;
}

export const SaveBtn: React.FC<SaveBtnProps> = ({ value, onChange, id }) => (
  <StyledSaveBtn
    type="primary"
    htmlType="submit"
    value={value}
    onChange={onChange}
    id={id}
  >
    Сохранить
  </StyledSaveBtn>
);
