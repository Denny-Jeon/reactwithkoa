import React from "react";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import ReactHtmlParser from "react-html-parser";
import { Page } from "../../../components";

const DetailView = ({
  data, match, history, removeContent,
}) => (
  <Page title="글보기">
    <h1>{data.title}</h1>
    <p />
    <hr />
    {ReactHtmlParser(data.content)}
    <br />
    {data.createdAt}
    <hr />
    <Button type="button" onClick={() => history.goBack()}>글목록</Button>{" "}
    <Button type="button" onClick={() => history.push(`/blog/update/${match.params.id}`)}>글수정</Button>{" "}
    <Button type="button" onClick={removeContent}>글삭제</Button>
  </Page>
);

DetailView.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
  }).isRequired,
  removeContent: PropTypes.func.isRequired,
};

export default DetailView;
