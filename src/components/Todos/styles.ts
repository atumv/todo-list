import styled from "styled-components";
import { variables as v } from "@styles/variables";

export const StyledTodos = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: ${v.tablet}) {
    flex-direction: column;
  }
`;
