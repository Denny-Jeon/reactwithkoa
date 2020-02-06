// DetailContainer.js 컴포넌트
import {
  compose, lifecycle, withState, withHandlers,
} from "recompose";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import DetailView from "./DetailView";

export default compose(
  withRouter,
  withState("data", "setData", {
    id: -1,
    title: "",
    content: "",
    createdAt: "",
  }),
  withHandlers({
    removeContent: (props) => async () => {
      const { data, history } = props;
      try {
        const response = await Axios.delete(`/api/app/v1/blog/${data.id}`);
        if (response.status === 204) {
          history.push("/blog/list?search=");
        }
      } catch (err) {
        console.log(err);
      }
    },
  }),
  lifecycle({
    async componentDidMount() {
      const { match, setData } = this.props;
      try {
        const response = await Axios.get(`/api/app/v1/blog/${match.params.id}`);
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    },
  }),
)(DetailView);
