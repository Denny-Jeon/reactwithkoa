import React from "react";
import {
  Row, Col, Button,
} from "reactstrap";
import PropTypes from "prop-types";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import {
  Page,
  Timeline,
  TimelineItem,
  TimelineItemIcon,
  TimelineItemHeader,
  TimelineItemBody,
  TimelineItemFooter,
} from "../../../components";

const timeLineColors = ["bg-primary", "bg-secondary",
  "bg-info", "bg-success", "bg-warning", "bg-danger", "bg-black", "bg-gray", "bg-gray-dark", "bg-indigo",
  "bg-lightblue", "bg-navy", "bg-purple", "bg-fuchsia",
  "bg-ping", "bg-maroon", "bg-orange", "bg-lime", "bg-teal", "bg-olive",
];

const ListView = ({ data, history }) => (
  <Page title="글목록">
    <Row>
      <Col md="12">
        <Timeline label="블로그 타임라인">

          { data.map((item, index) => (
            <TimelineItem key={item.id} bgColor={`${timeLineColors[(index % 20)]}`}>
              <TimelineItemIcon icon={faClock}>{item.createdAt}</TimelineItemIcon>
              <TimelineItemHeader>{item.title}</TimelineItemHeader>
              <TimelineItemBody>{item.description}</TimelineItemBody>

              <TimelineItemFooter>
                <Button color="primary" size="sm" onClick={() => history.push(`/blog/item/${item.id}`)}>
                    read more
                </Button>
              </TimelineItemFooter>
            </TimelineItem>
          ))}
        </Timeline>
      </Col>
    </Row>
  </Page>
);

ListView.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default ListView;
