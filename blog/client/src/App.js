import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Header, ContentMain, Footer,
} from "./pages";
import { StyleWrapper } from "./components";

const App = () => (
  <StyleWrapper className="wrapper">
    <BrowserRouter>
      <Header />
      <ContentMain />
      <Footer />
    </BrowserRouter>
  </StyleWrapper>
);

export default App;
