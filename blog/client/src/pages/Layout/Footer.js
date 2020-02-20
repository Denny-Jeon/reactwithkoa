import React from "react";
import { StyleWrapper } from "../../components";

const Footer = () => (
  <>
    <StyleWrapper
      style={{
        paddingBottom: "80px",
      }}
    />
    <footer className="main-footer fixed-bottom">
      <div className="float-right d-none d-sm-inline">
        Blog
      </div>
      <strong>Copyright © 2014-2019 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
    </footer>
  </>
);

export default Footer;
