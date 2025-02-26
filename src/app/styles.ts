import styled from "styled-components";
import { variables as v } from "@styles/variables";

export const StyledApp = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 3rem 2rem;
  padding-bottom: 6rem;

  @media (max-width: ${v.tablet}) {
    padding-bottom: 3rem;
  }
`;
