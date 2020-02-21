// PostView.js
import React from "react";
import { Editor } from "react-draft-wysiwyg";
import {
  FormGroup, Label, Input, Button, Card, CardBody, CardFooter, Col,
} from "reactstrap";
import PropTypes from "prop-types";
import { Page } from "../../../components";

const PostView = ({
  editorState, handleChange, handleSubmit, handleEditorStateChange, history,
}) => (
  <Page title="글작성">
    <Card className="card-warning">
      <CardBody>
        <FormGroup row>
          <Label for="title" sm={2}>제목</Label>
          <Col sm={10}>
            <Input type="text" name="title" id="title" placeholder="제목" onChange={handleChange} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="demo-editor" sm={2}>내용</Label>
          <Col sm={10}>
            <Editor
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              editorState={editorState}
              localization={{
                locale: "ko",
              }}
              toolbar={{
                inline: { inDropdown: true },
                list: { inDropdown: true },
                textAlign: { inDropdown: true },
                link: { inDropdown: true },
                history: { inDropdown: true },
              }}
              onEditorStateChange={handleEditorStateChange}
            />
          </Col>
        </FormGroup>
      </CardBody>
      <CardFooter>
        <Button size="sm" color="primary" onClick={handleSubmit}>저장</Button>{" "}
        <Button size="sm" type="button" onClick={() => history.goBack()}>글작성 취소</Button>
      </CardFooter>
    </Card>
  </Page>
);

PostView.propTypes = {
  editorState: PropTypes.shape({
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleEditorStateChange: PropTypes.func.isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};


export default PostView;
