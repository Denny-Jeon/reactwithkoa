import {
  compose, withState, withHandlers,
} from "recompose";
import * as Yup from "yup";
import { withRouter } from "react-router-dom";
import SearchView from "./SearchView";

export default compose(
  withRouter,
  withState("initialValues", "setInitialValues", {
    search: "",
  }),
  withHandlers({
    handleSubmit: (props) => (values, { setSubmitting }) => {
      const { history } = props;
      setSubmitting(false);

      history.replace(`/blog/list?search=${values.search}`);
    },
    handleValidateSchema: () => () => (
      Yup.object().shape({
        search: Yup.string(),
      })
    ),
  }),
)(SearchView);
