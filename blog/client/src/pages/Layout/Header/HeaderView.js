import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  Container,
} from "reactstrap";
import { NavLink as RRDNavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { faBold } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavItemWrapper } from "../../../components";
import Search from "./components/Search";

const HeaderView = ({ open, setToggle }) => (
  <>
    <Navbar color="white" light expand="md" className="main-header sticky-top">
      <Container>
        <NavbarBrand tag={RRDNavLink} exact to="/" className="brand-text font-weight-light">
          <FontAwesomeIcon icon={faBold} />log{" "}
        </NavbarBrand>
        <NavbarToggler className="order-1" onClick={setToggle} />
        <Collapse className="order-3" isOpen={open} navbar>
          <Nav navbar>
            <NavItemWrapper to="/blog/list?search=">글 목록</NavItemWrapper>
            <NavItemWrapper to="/blog/post">글 쓰기</NavItemWrapper>
          </Nav>
          <Search />
        </Collapse>
      </Container>
    </Navbar>
  </>
);

HeaderView.propTypes = {
  open: PropTypes.bool,
  setToggle: PropTypes.func.isRequired,
};

HeaderView.defaultProps = {
  open: false,
};


export default HeaderView;
