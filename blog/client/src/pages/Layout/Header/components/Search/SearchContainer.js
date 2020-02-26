import {
  compose, withState, withHandlers, lifecycle,
} from "recompose";
import * as Yup from "yup";
import { withRouter } from "react-router-dom";
import SearchView from "./SearchView";
import { withBlog } from "../../../../../components";

export default compose(
  withRouter,
  withBlog,
  withState("initialValues", "setInitialValues", {
    search: "",
  }),
  withHandlers({
    handleSubmit: (props) => async (values, { setSubmitting }) => {
      const { blogPaging, blogAction, history } = props;
      setSubmitting(false);

      const newPaging = {
        offset: 0,
        size: blogPaging.size,
      };
      await blogAction.setPaging(newPaging);
      await blogAction.setSearch(values.search);

      history.replace("/blog/list");
    },
    handleValidateSchema: () => () => (
      Yup.object().shape({
        search: Yup.string(),
      })
    ),
  }),
  lifecycle({
    async componentDidUpdate(prevProps) {
      const { blogSearch, setInitialValues } = this.props;
      if (blogSearch !== prevProps.blogSearch) {
        await setInitialValues({
          search: blogSearch,
        });
        return true;
      }

      return false;
    },
  }),
)(SearchView);
