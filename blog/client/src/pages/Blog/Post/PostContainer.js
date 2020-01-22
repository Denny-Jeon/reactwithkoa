// import React from "react";
import {
  compose, withState, withHandlers, lifecycle,
} from "recompose";
import {
  EditorState, convertToRaw, convertFromHTML, ContentState,
} from "draft-js";
import draftToHtml from "draftjs-to-html";
// import htmlToDraft from "html-to-draftjs";
import PostView from "./PostView";


const sampleMarkup = "<b>Bold text</b>, <i>Italic text</i><br/ ><br />"
  + '<a href="http://www.facebook.com">Example link</a>';
const blocksFromHTML = convertFromHTML(sampleMarkup);
const state = ContentState.createFromBlockArray(
  blocksFromHTML.contentBlocks,
  blocksFromHTML.entityMap,
);
// this.state = {
//   editorState: EditorState.createWithContent(state),
// };

export default compose(
  withState("editorState", "setEditorState", EditorState.createEmpty()),
  withHandlers({
    handleEditorStateChange: (props) => (editorState) => {
      console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
      props.setEditorState(editorState);
    },
  }),
  lifecycle({
    componentDidMount() {
      const { setEditorState } = this.props;

      setEditorState(EditorState.createWithContent(state));
    },
  }),
)(PostView);
