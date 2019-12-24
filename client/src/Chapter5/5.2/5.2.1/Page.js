// Page.js

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";

class Page extends React.Component {
  render() {
    return (
      <> {/* 16.08 버전에 추가된 <React.Fragment>의 동일한 표현 방식 */}
        {/* Header, Body, Footer 컴포넌트 합성 */}
        <Header />
        <hr />
        {/* Body 컴포넌트에는 props로 title을 넘긴다 */}
        <Body title="Page Title">
          <div>content</div>
        </Body>
        <hr />
        <Footer />
      </>
    );
  }
}

export default Page;
