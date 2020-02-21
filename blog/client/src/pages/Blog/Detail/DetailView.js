import React from "react";
import {
  Button, Card, CardHeader, CardBody, CardFooter, CardTitle,
} from "reactstrap";
import PropTypes from "prop-types";
import ReactHtmlParser from "react-html-parser";
import {
  Page, StyleWrapper,
} from "../../../components";

const DetailView = ({
  data, match, history, removeContent,
}) => (
  <Page title="글보기">
    <Card className="card-warning">
      <CardHeader>
        <CardTitle className="card-title">{data.title}</CardTitle>
      </CardHeader>
      <CardBody>
        {ReactHtmlParser(data.content)}
        <StyleWrapper class="text-muted mt-3">
          {data.createdAt}
        </StyleWrapper>
      </CardBody>
      <CardFooter>
        <Button size="sm" color="primary" type="button" onClick={() => history.goBack()}>글목록</Button>{" "}
        <Button size="sm" color="info" type="button" onClick={() => history.push(`/blog/update/${match.params.id}`)}>글수정</Button>{" "}
        <Button size="sm" color="success" type="button" onClick={removeContent}>글삭제</Button>
      </CardFooter>
    </Card>
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
