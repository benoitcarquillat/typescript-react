import React from "react";
import ReactDOM from "react-dom";
// @ts-ignore
import { MargaretProvider } from "@tymate/margaret";

import { theme } from "./ui/theme";
import { GlobalStyles } from "./ui";
import styled from "styled-components";
import App from "./App";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  padding: 40px;
`;

ReactDOM.render(
  <React.StrictMode>
    <MargaretProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <App />
      </Wrapper>
    </MargaretProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
