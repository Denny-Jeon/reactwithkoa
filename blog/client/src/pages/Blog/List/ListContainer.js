// ListContainer.js 컴포넌트
import {
  compose, lifecycle, withState, withHandlers,
} from "recompose";
import { withRouter } from "react-router-dom";
import Axios from "axios";
import ListView from "./ListView";

export default compose(
  withRouter,
  withState("data", "setData", []),
  withHandlers({
    searchList: (props) => async () => {
      const { setData, history } = props;
      try {
        const response = await Axios.get(`/api/app/v1/blog${history.location.search}`);
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    },
  }),
  lifecycle({
    async componentDidMount() {
      const { searchList } = this.props;
      searchList();
    },
    componentDidUpdate(prevProps) {
      const { location, searchList } = this.props;
      // console.log(location.search);
      // console.log(prevProps.location.search);
      console.log(location);
      console.log(prevProps.location);
      console.log(location === prevProps.location);
      if (location !== prevProps.location) {
        console.log("call");
        searchList();
      }
    },
  }),
)(ListView);
