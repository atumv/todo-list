import * as styled from "styled-components";
import { variables as v } from "@styles/variables";

export const GlobalStyles = styled.createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: ${v.primaryFont};
  }

  html {
    overflow-y: scroll;
  }

  body {
    min-height: 100vh;
    min-width: 320px;
    background: ${v.bodyBg};
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  input:focus,
  textarea:focus,
  select:focus,
  button:focus-visible {
    outline: none;
    box-shadow: ${v.inputShadowOnFocus};
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: "";
  }

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    display: none;
  }
`;
