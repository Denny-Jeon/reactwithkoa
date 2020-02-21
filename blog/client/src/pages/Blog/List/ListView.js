import React from "react";
import {
  Row, Col, Button, FormGroup, Label, Input,
} from "reactstrap";
import PropTypes from "prop-types";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import Pagination from "react-js-pagination";
import {
  Page,
  Timeline,
  TimelineItem,
  TimelineItemIcon,
  TimelineItemHeader,
  TimelineItemBody,
  TimelineItemFooter,
  StyleWrapper,
} from "../../../components";

const timeLineColors = ["bg-primary", "bg-secondary",
  "bg-info", "bg-success", "bg-warning", "bg-danger", "bg-black", "bg-gray", "bg-gray-dark", "bg-indigo",
  "bg-lightblue", "bg-navy", "bg-purple", "bg-fuchsia",
  "bg-ping", "bg-maroon", "bg-orange", "bg-lime", "bg-teal", "bg-olive",
];

const optionPage = [1, 2, 5, 10, 20, 30, 50, 100];


const ListView = ({
  data, paging, history, handlePaging, setPagingSize,
}) => (
  <Page title="글목록">
    <Row>
      <Col md="12">
        <Timeline label="블로그 타임라인">

          { data.items.map((item, index) => (
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
    <Row>
      <Col xs="4">
        <FormGroup row>
          <Label for="select" size="sm" xs={3}>Showing: </Label>
          <Col xs={9}>
            <StyleWrapper id="select" className="float-left">
              <Input type="select" name="size" bsSize="sm" onChange={setPagingSize} value={paging.size}>
                {optionPage.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </Input>
            </StyleWrapper>
          </Col>
        </FormGroup>
      </Col>
      <Col xs="8">
        <StyleWrapper className="float-right">
          <Pagination
            activePage={(paging.offset / paging.size) + 1}
            itemsCountPerPage={paging.size}
            totalItemsCount={data.total}
            pageRangeDisplayed={5}
            onChange={handlePaging}
            innerClass="pagination pagination-sm"
            itemClass="page-item"
            linkClass="page-link"
          />
        </StyleWrapper>
      </Col>
    </Row>
  </Page>
);

ListView.propTypes = {
  data: PropTypes.shape({
    total: PropTypes.number.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    items: PropTypes.array.isRequired,
  }).isRequired,
  paging: PropTypes.shape({
    offset: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  handlePaging: PropTypes.func.isRequired,
  setPagingSize: PropTypes.func.isRequired,
};

export default ListView;
