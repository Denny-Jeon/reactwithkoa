// PostView.js 컴포넌트
import React from "react";
import { Editor } from "react-draft-wysiwyg";
import { Container, Input, Button } from "reactstrap";
import PropTypes from "prop-types";

// 글목록 이동을 위한 history 추가
const PostView = ({
  editorState, handleChange, handleSubmit, handleEditorStateChange, history,
}) => (
  <Container>
    <p />
    <Input type="text" name="title" id="title" placeholder="제목" onChange={handleChange} />
    <p />
    <div className="demo-section">
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
    </div>
    <p />
    <Button onClick={handleSubmit}>저장</Button>{" "}
    {/* 글작성 취소시 글목록이로  이동 */}
    <Button type="button" onClick={() => history.goBack()}>글작성 취소</Button>
  </Container>
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
