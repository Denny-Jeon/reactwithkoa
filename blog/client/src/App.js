import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Container } from "reactstrap";
import {
  Header, ContentMain, Footer,
} from "./pages";

const App = () => (
  <BrowserRouter>
    <Header />
    <Container>
      <ContentMain />
      <Footer />
    </Container>
  </BrowserRouter>
);

export default App;
