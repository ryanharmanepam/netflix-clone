import React, { Component } from "react";

export class ExampleCreateElement extends Component {
  render() {
    return React.createElement("div", null, `Hello world`);
  }
}
