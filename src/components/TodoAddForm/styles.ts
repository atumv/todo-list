import styled from "styled-components";
import { variables as v } from "@styles/variables";

export const StyledFormContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: ${v.tablet}) {
    width: 100%;
  }
`;
