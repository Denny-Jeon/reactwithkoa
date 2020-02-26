import Axios from "axios";

// eslint-disable-next-line
export const search = (param) => Axios.get(`/api/app/v1/blog?${param}`);
