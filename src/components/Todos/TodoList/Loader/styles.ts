import styled from "styled-components";
import { variables as v } from "@styles/variables";

export const StyledLoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`;

export const StyledLoader = styled.div`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  width: 2rem;
  height: 2rem;
  border: 4px solid ${v.spinnerBorderFront};
  border-left-color: ${v.spinnerBorderBack};
  border-right-color: ${v.spinnerBorderBack};
  border-bottom-color: ${v.spinnerBorderBack};
  border-radius: 50%;
  animation: spin 1s linear infinite;
`;
