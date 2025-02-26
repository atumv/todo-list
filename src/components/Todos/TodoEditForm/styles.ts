import styled from "styled-components";
import { variables as v } from "@styles/variables";

export const StyledTodoEdit = styled.div`
  width: 100%;
  text-align: end;
  margin-left: 1rem;

  @media (max-width: ${v.tablet}) {
    margin-top: 1rem;
    width: 100%;
    display: block;
    margin-left: 0;
  }

  .controls-container {
    display: flex;
    flex-direction: row;
    justify-content: end;

    @media (max-width: ${v.tablet}) {
      display: block;
    }
  }
`;
