import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Header, ContentMain, Footer } from "./pages";

const App = () => (
  <BrowserRouter>
    <Header />
    <ContentMain />
    <Footer />
  </BrowserRouter>
);

export default App;
