// PostContainer.js 컴포넌트
import {
  compose, withState, withHandlers,
} from "recompose";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import PostView from "./PostView";

export default compose(
  withRouter,
  withState("editorState", "setEditorState", EditorState.createEmpty()),
  withState("title", "setTitle", ""),
  withHandlers({
    handleChange: (props) => (e) => {
      props.setTitle(e.target.value);
    },
    handleEditorStateChange: (props) => (editorState) => {
      props.setEditorState(editorState);
    },
    handleSubmit: (props) => async () => {
      const { history } = props;
      const newBlog = {
        title: props.title,
        content: draftToHtml(convertToRaw(props.editorState.getCurrentContent())),
      };

      try {
        const response = await Axios.post("/api/app/v1/blog", newBlog);
        if (response.status === 201) {
          history.push("/blog/list");
        }
      } catch (err) {
        console.log(err);
      }
    },
  }),
)(PostView);
