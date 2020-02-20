import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { Container, Col, Row } from "reactstrap";
import { StyleWrapper } from "../StyleWrapper";

const PageHeader = ({ children }) => (
  <StyleWrapper className="content-header">
    {children}
  </StyleWrapper>
);

PageHeader.propTypes = {
  children: PropTypes.node,
};

PageHeader.defaultProps = {
  children: null,
};

const PageContent = ({ children }) => (
  <StyleWrapper className="content">
    {children}
  </StyleWrapper>
);

PageContent.propTypes = {
  children: PropTypes.node,
};

PageContent.defaultProps = {
  children: null,
};

const Page = (props) => {
  const {
    className, title, subTitle, children,
  } = props;
  const pageClassName = className ? cx("content-wrapper", className) : className;

  return (
    <StyleWrapper className={pageClassName}>
      <PageHeader>
        <Container>
          <Row className="mb-2">
            <Col sm={6}>
              <StyleWrapper component="h1" className="m-0 text-dark">
                {title}
              </StyleWrapper>
            </Col>
            <Col sm={6}>
              <StyleWrapper className="breadcrumb float-sm-right">
                {subTitle}
              </StyleWrapper>
            </Col>
          </Row>
        </Container>
      </PageHeader>
      <PageContent>
        <Container>
          {children}
        </Container>
      </PageContent>
    </StyleWrapper>
  );
};

Page.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  children: PropTypes.node,
};

Page.defaultProps = {
  className: null,
  title: "",
  subTitle: "",
  children: null,
};

export default Page;
