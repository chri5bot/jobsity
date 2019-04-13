import React, { Component } from "react";
import { GlobalStyle } from "./styles/reset.css";

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <span>hey</span>
      </div>
    );
  }
}

export default App;
