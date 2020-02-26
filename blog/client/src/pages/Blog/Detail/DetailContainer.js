// DetailContainer.js 컴포넌트
import {
  compose, lifecycle, withState, withHandlers,
} from "recompose";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import DetailView from "./DetailView";
import { resetPaging } from "../../../util";
import { withBlog } from "../../../components";

export default compose(
  withRouter,
  withBlog,
  withState("data", "setData", {
    id: -1,
    title: "",
    content: "",
    createdAt: "",
  }),
  withHandlers({
    removeContent: (props) => async () => {
      const {
        blogAction, blogData, blogPaging, data, history,
      } = props;
      try {
        const response = await Axios.delete(`/api/app/v1/blog/${data.id}`);
        if (response.status === 204) {
          const newPaging = resetPaging(blogData.total, blogData.items, blogPaging);
          await blogAction.setPaging(newPaging);
          history.push("/blog/list");
        }
      } catch (err) {
        history.push("/blog/list");
      }
    },
  }),
  lifecycle({
    async componentDidMount() {
      const { match, setData, history } = this.props;
      try {
        const response = await Axios.get(`/api/app/v1/blog/${match.params.id}`);
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (err) {
        history.push("/blog/list");
      }
    },
  }),
)(DetailView);
