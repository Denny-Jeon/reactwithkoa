import React from "react";
// HeaderView를 구성할 디자인 컴포넌트 import
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Form,
  Input,
  Button,
} from "reactstrap";
// 라우트를 수행할 NavLink import
// 참고: 아래 as는 NavLink를 RRDNavLink로 표기하겠다는 의미
//       이유는 reactstrap에서도 NavLink라는 동일한 이름의
//       컴포넌트가 있어 두 컴포넌트간 중복을 피하기 위해서다.
import { NavLink as RRDNavLink } from "react-router-dom";
// 전송된 prop의 타입을 체크하기 위한 모듈(패키지)
import PropTypes from "prop-types";

// open, setToggle이라는 두 개의 props를 부모 컴포넌트로부터 전달받는다.
const HeaderView = ({ open, setToggle }) => (
  <>
    {/* Navbar를 생성 className의 sticky-top은 글 내용이 많아 스크롤을 하더라도 Header 컴포넌트는 항상 최상위에 출력 */}
    <Navbar color="primary" dark expand="md" className="sticky-top">
      {/* NavbarBrand의 tag prop에 function 즉, 컴포넌트가 입력될 수 있어서 RRDNavLink 컴포넌트로 설정
          react-router-dom의 NavLink props를 사용할 수 있다.
       */}
      <NavbarBrand tag={RRDNavLink} exact to="/">홈</NavbarBrand>

      {/* 브라우저가 Navbar expand보다 작아지는 경우 토글러 버튼이 출력된다.
          토글러 버튼을 true이면 아래 Collapse 메뉴가 출력되고 false이면 닫힌다.
      */}
      <NavbarToggler onClick={setToggle} />

      {/* 메뉴 설정 */}
      <Collapse isOpen={open} navbar>
        <Nav className="mr-auto" navbar>
          {/* 글 목록 */}
          <NavItem>
            <NavLink tag={RRDNavLink} exact to="/blog/list" activeClassName="active">글 목록</NavLink>
          </NavItem>
          {/* 글  쓰기 */}
          <NavItem>
            <NavLink tag={RRDNavLink} exact to="/blog/post" activeClassName="active">글 쓰기</NavLink>
          </NavItem>
        </Nav>
        {/* 검색 */}
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
