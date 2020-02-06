import React from "react";
import { Route, Redirect } from "react-router-dom";
import {
  BlogList, BlogPost, BlogDetail, BlogUpdate,
} from "../Blog";


const ContentMain = () => (
  <>
    <Route exact path="/">
      <Redirect to="/blog/list?search=" />
    </Route>
    <Route exact path="/blog/list" component={BlogList} />
    <Route exact path="/blog/post" component={BlogPost} />
    <Route exact path="/blog/item/:id" component={BlogDetail} />
    <Route exact path="/blog/update/:id" component={BlogUpdate} />
  </>
);


export default ContentMain;
