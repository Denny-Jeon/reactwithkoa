import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import { Map, List, fromJS } from "immutable";
import * as BlogApi from "../../remote";

const SET_PAGING_BLOG = "blog/SET_PAGING";
const SET_SEARCH_BLOG = "blog/SET_SEARCH";
const SEARCH_BLOG = "blog/SEARCH";

export const setPaging = createAction(SET_PAGING_BLOG);
export const setSearch = createAction(SET_SEARCH_BLOG);
export const search = createAction(SEARCH_BLOG, BlogApi.search);

const initialState = fromJS({
  data: Map({
    total: 0,
    items: List([]),
  }),
  paging: Map({
    offset: 0,
    size: 5,
  }),
  search: "",
});

export default handleActions(
  {
    [SET_PAGING_BLOG]: (state, action) => state.set("paging", fromJS(action.payload)),
    [SET_SEARCH_BLOG]: (state, action) => state.set("search", action.payload),
    ...pender({
      type: SEARCH_BLOG,
      onSuccess(state, action) {
        return state.set("data", fromJS(action.payload.data));
      },
    }),
  },
  initialState,
);
