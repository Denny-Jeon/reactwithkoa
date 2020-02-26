import React from "react";
import {
  Row, Col, Button, FormGroup, Label, Input,
} from "reactstrap";
import PropTypes from "prop-types";
import { faClock, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  blogData, blogPaging, history, handlePaging, setPagingSize, refreshContent,
}) => (
  <Page
    title="글목록"
    subTitle={
      <Button size="sm" color="warning" onClick={refreshContent}><FontAwesomeIcon icon={faSyncAlt} /></Button>
    }
  >
    <Row>
      <Col md="12">
        <Timeline label="블로그 타임라인">

          { blogData && blogData.items.length > 0 && blogData.items.map((item, index) => (
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
          {blogData && blogData.items.length <= 0 && (
            <TimelineItem bgColor={`${timeLineColors[0]}`}>
              <TimelineItemIcon icon={faClock} />
              <TimelineItemHeader>No Content</TimelineItemHeader>
              <TimelineItemBody>해당 콘텐츠가 존재하지 않습니다.</TimelineItemBody>
            </TimelineItem>
          )}
        </Timeline>
      </Col>
    </Row>
    { blogData && blogData.items.length > 0 && (
      <Row>
        <Col xs="4">
          <FormGroup row>
            <Label for="select" size="sm" xs={3}>Showing: </Label>
            <Col xs={9}>
              <StyleWrapper id="select" className="float-left">
                <Input type="select" name="size" bsSize="sm" onChange={setPagingSize} value={blogPaging.size}>
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
              activePage={(blogPaging.offset / blogPaging.size) + 1}
              itemsCountPerPage={blogPaging.size}
              totalItemsCount={blogData.total}
              pageRangeDisplayed={5}
              onChange={handlePaging}
              innerClass="pagination pagination-sm"
              itemClass="page-item"
              linkClass="page-link"
            />
          </StyleWrapper>
        </Col>
      </Row>
    )}
  </Page>
);

ListView.propTypes = {
  blogData: PropTypes.shape({
    total: PropTypes.number.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    items: PropTypes.array.isRequired,
  }).isRequired,
  blogPaging: PropTypes.shape({
    offset: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  handlePaging: PropTypes.func.isRequired,
  setPagingSize: PropTypes.func.isRequired,
  refreshContent: PropTypes.func.isRequired,
};

export default ListView;
