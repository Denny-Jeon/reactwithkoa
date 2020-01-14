import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  Form,
  Input,
  Button,
} from "reactstrap";
import { NavLink as RRDNavLink } from "react-router-dom";
import PropTypes from "prop-types";
// NavItemWrapper를 import
import { NavItemWrapper } from "../../../components";

const HeaderView = ({ open, setToggle }) => (
  <>
    <Navbar color="primary" dark expand="md" className="sticky-top">
      <NavbarBrand tag={RRDNavLink} exact to="/">홈</NavbarBrand>
      <NavbarToggler onClick={setToggle} />
      <Collapse isOpen={open} navbar>
        <Nav className="mr-auto" navbar>

          {/* NavItemWrapper 컴포넌트를 이용하여 메뉴를 변경 */}
          <NavItemWrapper to="/blog/list">글 목록</NavItemWrapper>
          <NavItemWrapper to="/blog/post">글 쓰기</NavItemWrapper>
        </Nav>

        <Form inline className="my-2 my-log-0">
          <Input type="search" placeholder="Search" className="mr-sm-2" />
          <Button type="submit" className="my-2 my-sm-0" color="success">검색</Button>
        </Form>
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
