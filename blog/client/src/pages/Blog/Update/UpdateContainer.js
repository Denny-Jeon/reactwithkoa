// UpdateContainer.js 컴포넌트
import {
  compose, withState, withHandlers, lifecycle,
} from "recompose";
import {
  EditorState, convertToRaw, convertFromHTML, ContentState,
} from "draft-js";
import draftToHtml from "draftjs-to-html";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import UpdateView from "./UpdateView";

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
      const { history, match } = props;
      const updateBlog = {
        title: props.title,
        content: draftToHtml(convertToRaw(props.editorState.getCurrentContent())),
      };

      try {
        const response = await Axios.put(`/api/app/v1/blog/${match.params.id}`, updateBlog);
        if (response.status === 200) {
          history.push(`/blog/item/${match.params.id}`);
        }
      } catch (err) {
        console.log(err);
      }
    },
  }),
  lifecycle({
    async componentDidMount() {
      const { match, setEditorState, setTitle } = this.props;
      try {
        const response = await Axios.get(`/api/app/v1/blog/${match.params.id}`);
        if (response.status === 200) {
          const blocksFromHTML = convertFromHTML(response.data.content);
          const state = ContentState.createFromBlockArray(
            blocksFromHTML.contentBlocks,
            blocksFromHTML.entityMap,
          );

          setTitle(response.data.title);
          setEditorState(EditorState.createWithContent(state));
        }
      } catch (err) {
        console.log(err);
      }
    },
  }),
)(UpdateView);
