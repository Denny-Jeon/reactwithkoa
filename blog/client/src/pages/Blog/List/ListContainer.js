// ListContainer.js 컴포넌트
import {
  compose, lifecycle, withState,
} from "recompose";
import Axios from "axios";
import ListView from "./ListView";

export default compose(
  withState("data", "setData", []),
  lifecycle({
    async componentDidMount() {
      const { setData } = this.props;
      try {
        const response = await Axios.get("/api/app/v1/blog");
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    },
  }),
)(ListView);
