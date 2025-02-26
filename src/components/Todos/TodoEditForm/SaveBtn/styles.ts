import styled from "styled-components";
import { Button } from "antd";
import { variables as v } from "@styles/variables";

export const StyledSaveBtn = styled(Button)`
  margin-left: 0.5rem;

  &:active {
    background-color: ${v.saveBtnActiveBg};
  }

  @media (max-width: ${v.tablet}) {
    float: none;
    display: block;
    width: 100%;
    margin-top: 1rem;
    margin-left: 0;
    // padding: 1rem 2rem;
  }
`;
