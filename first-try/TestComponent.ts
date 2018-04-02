import * as React from "react";
import * as ReactDOM from "react-dom";
import h from "react-hyperscript";

export default class TestComponent extends React.Component <{}> {
  render() {
    return (
      h("div.example", [
        h("h1#heading", "This is hyperscript"),
        h("h2", "creating React.js markup"),
      ])
    );
  }
}

ReactDOM.render(React.createElement(TestComponent, {}, null), document.body);
