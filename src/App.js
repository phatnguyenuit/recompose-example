import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ButtonWithTrack } from "./components/Button/Button";
import { LinkWithTrack } from "./components/Link/Link";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="container">
        <ButtonWithTrack
          style={{
            marginTop: "10px",
            backgroundColor: "pink",
            padding: "12px",
            maxWidth: "200px",
          }}
        >
          Ahihi
        </ButtonWithTrack>
        <br />
        <LinkWithTrack
          style={{
            marginTop: "10px",
            backgroundColor: "pink",
            padding: "12px",
            maxWidth: "200px",
          }}
          href="https://translate.google.com"
        >
          Ahihi
        </LinkWithTrack>
      </div>
    </div>
  );
}

export default App;
