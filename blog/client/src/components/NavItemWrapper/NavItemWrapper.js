import React from "react";
import {
  NavItem,
  NavLink,
} from "reactstrap";
import { NavLink as RRDNavLink } from "react-router-dom";
import PropTypes from "prop-types";

// 부모 컴포넌트로부터 to, activeClassName, children을 props로 전달받는다.
const NavItemWrapper = ({ to, activeClassName, children }) => (
  <NavItem>
    {/* 전달받은 to, activeClassName, children을 적용한다. */}
    <NavLink exact tag={RRDNavLink} to={to} activeClassName={activeClassName}>{children}</NavLink>
  </NavItem>
);

// props 인자의 타입을 체크. to는 반드시 전달받아야 한다.
NavItemWrapper.propTypes = {
  to: PropTypes.string.isRequired,
  activeClassName: PropTypes.string,
  children: PropTypes.node,
};

NavItemWrapper.defaultProps = {
  activeClassName: "active",
  children: null,
};

export default NavItemWrapper;
