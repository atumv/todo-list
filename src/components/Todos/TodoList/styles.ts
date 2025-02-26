import styled from "styled-components";
import { variables as v } from "@styles/variables";

export const StyledTodoListContainer = styled.div`
  min-width: 228px;

  @media (max-width: ${v.tablet}) {
    width: 100%;
    max-width: none;
  }

  .todo-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    min-width: 223px;
    max-width: 300px;
    max-height: 257px;
    overflow-y: auto;
    margin-top: 0.5rem;

    @media (max-width: ${v.tablet}) {
      max-width: 100%;
    }
  }
`;
