import React from "react";
// 라우팅을 구성하기 위해 4개의 컴포넌트를 로딩한다.
import {
  BrowserRouter, Route, Redirect, Link, Prompt, Switch, withRouter, useLocation, useRouteMatch, useHistory, useParams,
} from "react-router-dom";

// Index 컴포넌트
const Index = () => (
  <div>
        index
  </div>
);

// IndexSub 컴포넌트
class IndexSub extends React.Component {
  render() {
    const { location, match, history } = this.props;
    console.log(location);
    console.log(match);
    console.log(history);

    return (
      <div>
        <div>pathname: {location.pathname}</div>
        <div>param: {match.params.id}</div>
        <button type="button" onClick={() => history.push("/index")}>Go Index</button>
      </div>
    );
  }
}

const IndexSubWithRouter = withRouter(IndexSub);

const UseIndexSub = () => {
  const location = useLocation();
  const match = useRouteMatch();
  const history = useHistory();
  const params = useParams();

  console.log(location);
  console.log(match);
  console.log(params);

  return (
    <div>
      <div>pathname: {location.pathname}</div>
      <div>param: {match.params.id}</div>
      <div>id: {params.id}</div>
      <button type="button" onClick={() => history.push("/index")}>Go Index</button>
    </div>
  );
};
// Home 컴포넌트
const Home = () => (
  <div>
        home
  </div>
);

// About 컴포넌트
const About = () => (
  <div>
        about
  </div>
);

// 경로를 찾지 못한 경우(404) 컴포넌트
const NoMatch = () => (
  <div>
        Unknown
  </div>
);

// 라우팅 이동을 위한 Header 컴포넌트
const Header = () => (
  <div>
    <Link to="/index">INDEX</Link>{" "}
    <Link to="/index/sub?qs=1">SUB</Link>{" "}
    <Link to="/useindex/sub?qs=1">USE SUB</Link>{" "}
    <Link to="/home">HOME</Link>{" "}
    <Link to="/about">ABOUT</Link>{" "}
    <Link to="/unknown">UNKNOWN</Link>
  </div>
);

// App 컴포넌트
const App = () => (
  <div>
    {/* UI와 URL을 동기화하기 위해 HTML5 history API
       (pushState, replaceState 및 popstate 이벤트)를 사용하는 <라우터>
    */}
    <BrowserRouter
      getUserConfirmation={(message, callback) => {
        // this is the default behavior
        const allowTransition = window.confirm(message);
        callback(allowTransition);
      }}
    >
      <Header />
      <hr />
      <Switch>
        {/* 라우팅의 가장 핵심적인 요소로 경로와 현재 URL과 일치 할 때 일부 UI를 렌더링 */}
        <Route exact path="/">
          {/* 새 위치로 이동 */}
          <Redirect to="/index" />
        </Route>
        <Route exact path="/index" component={Index} />
        <Route exact path="/index/:id">
          <IndexSubWithRouter />
        </Route>
        <Route exact path="/useindex/:id">
          <UseIndexSub />
        </Route>
        <Route exact path="/home" render={() => (<Home />)} />
        <Route exact path="/about" component={About} />

        <Route component={NoMatch} />
      </Switch>
      <Prompt
        message={(location) => (location.pathname.startsWith("/home")
          ? true
          : `Are you sure you want to go to ${location.pathname}?`)}
      />

    </BrowserRouter>
  </div>
);

export default App;
