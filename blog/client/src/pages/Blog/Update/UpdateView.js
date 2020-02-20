// UpdateView.js 컴포넌트
import React from "react";
import { Editor } from "react-draft-wysiwyg";
import { Input, Button } from "reactstrap";
import PropTypes from "prop-types";
import { Page } from "../../../components";

// 글목록 이동을 위한 history 추가
const UpdateView = ({
  title, editorState, handleChange, handleSubmit, handleEditorStateChange, history,
}) => (
  <Page title="글수정">
    <p />
    <Input type="text" name="title" id="title" placeholder="제목" onChange={handleChange} value={title} />
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
    <Button onClick={handleSubmit}>수정</Button>{" "}
    {/* 글작성 취소시 글목록으로  이동 */}
    <Button type="button" onClick={() => history.goBack()}>글수정 취소</Button>
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
