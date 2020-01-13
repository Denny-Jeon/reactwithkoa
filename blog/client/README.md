1. yarn add reactstrap bootstrap

2. remove App.css App.test.js index.css logo.svg 

3. modify App.js
import React from "react";

function App() {
  return (
    <div className="App">
      Welcome blog
    </div>
  );
}

export default App;


4. modify index.js
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


6. yarn start