import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Container } from "reactstrap";
import {
  Header, ContentMain, Footer,
} from "./pages";
import { StyleWrapper } from "./components";

const App = () => (
  <StyleWrapper className="wrapper">
    <BrowserRouter>
      <Header />
      <Container>
        <ContentMain />
        <Footer />
      </Container>
    </BrowserRouter>
  </StyleWrapper>
);

export default App;
