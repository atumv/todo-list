import styled from 'styled-components';
import { variables as v } from '@styles/variables';

export const StyledFormContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: ${v.tablet}) {
    width: 100%;
  }

  .add-btn__plus {
    display: inline-block;
    transform: rotate(45deg);
    user-select: none;
  }
`;
