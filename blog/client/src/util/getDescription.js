import {
  convertToRaw,
} from "draft-js";

const getDescription = (editorState) => {
  const { blocks } = convertToRaw(editorState.getCurrentContent());
  const description = blocks.map((block) => (!block.text.trim() && "\n") || block.text).join("\n");

  return description.length > 100 ? `${description.substring(0, 100)}...` : description;
};

export default getDescription;
