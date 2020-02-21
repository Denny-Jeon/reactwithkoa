// ListContainer.js 컴포넌트
import {
  compose, lifecycle, withState, withHandlers,
} from "recompose";
import { withRouter } from "react-router-dom";
import Axios from "axios";
import ListView from "./ListView";

export default compose(
  withRouter,
  withState("paging", "setPaging", {
    offset: 0,
    size: 5,
  }),
  withState("data", "setData", {
    total: 0,
    items: [],
  }),
  withHandlers({
    searchList: (props) => async () => {
      const {
        paging, setData, history,
      } = props;
      try {
        const response = await Axios.get(`/api/app/v1/blog${history.location.search}&offset=${paging.offset}&size=${paging.size}`);
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    },
  }),
  withHandlers({
    handlePaging: (props) => async (selectedPage) => {
      const { paging, setPaging, searchList } = props;
      const newPaging = {
        offset: (selectedPage - 1) * paging.size,
        size: paging.size,
      };
      setPaging(newPaging, () => searchList());
    },
    setPagingSize: (props) => async (e) => {
      const { paging, setPaging, searchList } = props;
      if (e.target.value === paging.size) return;

      console.log(e.target.value, paging.size);
      const newPaging = {
        offset: 0,
        size: parseInt(e.target.value, 10),
      };
      console.log(newPaging);
      setPaging(newPaging, () => searchList());
    },
  }),
  lifecycle({
    async componentDidMount() {
      const { searchList } = this.props;
      searchList();
    },
    componentDidUpdate(prevProps) {
      const { location, searchList } = this.props;
      if (location !== prevProps.location) {
        searchList();
      }
    },
  }),
)(ListView);
