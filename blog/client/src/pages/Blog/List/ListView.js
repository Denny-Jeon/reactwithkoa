import React from "react";
import {
  Row, Col,
} from "reactstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Page } from "../../../components";

const ListView = ({ data }) => (
  <Page title="글목록">
    <Row>
      { data.map((item) => (
        <Col key={item.id} xs="12" style={{ marginTop: "30px" }}>
          <Link to={`/blog/item/${item.id}`}>
            <h2>{item.title}</h2>
            Posted by {item.createdAt}
          </Link>
        </Col>
      ))}
    </Row>
  </Page>
);

ListView.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired,
};

export default ListView;
