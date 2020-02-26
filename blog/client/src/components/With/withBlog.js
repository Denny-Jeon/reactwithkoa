import { compose } from "recompose";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as blogReducer from "../../store/reducers/blogReducer";

export default compose(
  connect(
    (state) => ({
      blogData: state.blog.get("data").toJS(),
      blogPaging: state.blog.get("paging").toJS(),
      blogSearch: state.blog.get("search"),
    }),
    (dispatch) => ({
      blogAction: bindActionCreators(blogReducer, dispatch),
    }),
  ),
);
