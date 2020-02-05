import React from "react";
import { Route, Redirect } from "react-router-dom";
import { BlogList, BlogPost, BlogDetail } from "../Blog";


const ContentMain = () => (
  <>
    <Route exact path="/">
      <Redirect to="/blog/list" />
    </Route>
    <Route exact path="/blog/list" component={BlogList} />
    <Route exact path="/blog/post" component={BlogPost} />
    <Route exact path="/blog/item/:id" component={BlogDetail} />
  </>
);


export default ContentMain;
