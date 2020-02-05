import React from "react";
import {
  Container, Row, Col,
} from "reactstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ListView = ({ data }) => (
  <Container>
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

  </Container>
);

ListView.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired,
};

export default ListView;
