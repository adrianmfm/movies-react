import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { List } from "./containers/List";
import "bootswatch/dist/lux/bootstrap.css";

const App = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark border-bottom border-white" >
        <a href="/" className="navbar-brand" style={{marginLeft: '20px'}}>
          MovieApp
        </a>
      </nav>
      <main className="bg-dark">
        <div className="container">
          <List />
        </div>
      </main>
    </Fragment>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

reportWebVitals();
