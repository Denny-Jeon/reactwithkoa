import React from "react";
import { Container, Button } from "reactstrap";
import PropTypes from "prop-types";
import ReactHtmlParser from "react-html-parser";

const DetailView = ({ data, history, removeContent }) => (
  <Container>
    <h1>{data.title}</h1>
    <p />
    <hr />
    {ReactHtmlParser(data.content)}
    <br />
    {data.createdAt}
    <hr />
    <Button type="button" onClick={() => history.goBack()}>글목록</Button>{" "}
    <Button type="button">글수정</Button>{" "}
    <Button type="button" onClick={removeContent}>글삭제</Button>
  </Container>
);

DetailView.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  removeContent: PropTypes.func.isRequired,
};

export default DetailView;
