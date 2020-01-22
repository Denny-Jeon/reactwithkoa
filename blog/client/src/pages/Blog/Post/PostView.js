import React from "react";
import PostEditor from "./PostEditor";

const PostView = ({ editorState, handleEditorStateChange }) => (
  <div>
    <PostEditor
      editorState={editorState}
      handleEditorStateChange={handleEditorStateChange}
    />
  </div>
);

export default PostView;
