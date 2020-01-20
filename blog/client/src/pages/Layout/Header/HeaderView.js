import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
} from "reactstrap";
import { NavLink as RRDNavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { NavItemWrapper } from "../../../components";
// Search 컴포넌트 import
import Search from "./components/Search";

const HeaderView = ({ open, setToggle }) => (
  <>
    <Navbar color="primary" dark expand="md" className="sticky-top">
      <NavbarBrand tag={RRDNavLink} exact to="/">홈</NavbarBrand>
      <NavbarToggler onClick={setToggle} />
      <Collapse isOpen={open} navbar>
        <Nav className="mr-auto" navbar>
          <NavItemWrapper to="/blog/list">글 목록</NavItemWrapper>
          <NavItemWrapper to="/blog/post">글 쓰기</NavItemWrapper>
        </Nav>
        <Search />
      </Collapse>
    </Navbar>
  </>
);

// 타입 체크 구문, 컴포넌트.propTypes로 전달되는 props의 타입을 체크
HeaderView.propTypes = {
  open: PropTypes.bool,
  setToggle: PropTypes.func.isRequired,
};

HeaderView.defaultProps = {
  open: false,
};


export default HeaderView;
