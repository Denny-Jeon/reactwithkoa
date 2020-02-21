// UpdateView.js 컴포넌트
import React from "react";
import { Editor } from "react-draft-wysiwyg";
import {
  FormGroup, Label, Input, Button, Card, CardHeader, CardBody, CardFooter, CardTitle, Col,
} from "reactstrap";
import PropTypes from "prop-types";
import { Page } from "../../../components";

// 글목록 이동을 위한 history 추가
const UpdateView = ({
  title, editorState, handleChange, handleSubmit, handleEditorStateChange, history,
}) => (
  <Page title="글수정">
    <Card className="card-warning">
      <CardHeader>
        <CardTitle className="card-title">{title}</CardTitle>
      </CardHeader>
      <CardBody>
        <FormGroup row>
          <Label for="title" sm={2}>제목</Label>
          <Col sm={10}>
            <Input type="text" name="title" id="title" placeholder="제목" onChange={handleChange} value={title} />
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
        <Button size="sm" color="primary" onClick={handleSubmit}>수정</Button>{" "}
        <Button size="sm" type="button" onClick={() => history.goBack()}>글수정 취소</Button>
      </CardFooter>
    </Card>
  </Page>
);

UpdateView.propTypes = {
  title: PropTypes.string.isRequired,
  editorState: PropTypes.shape({
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleEditorStateChange: PropTypes.func.isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};


export default UpdateView;
