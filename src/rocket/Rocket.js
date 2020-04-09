import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import renderers from "react-markdown-github-renderers";
import { MDBContainer } from "mdbreact";
import md from "./Rocket.md";

export class Rocket extends Component {
  constructor(props) {
    super(props);
    this.state = { markdown: null };
  }

  componentWillMount() {
    fetch(md)
      .then((res) => res.text())
      .then((text) => {
        this.setState({ markdown: text });
      });
  }

  render() {
    return (
      <div>
        <MDBContainer className="text-justify my-5">
          <ReactMarkdown
            source={this.state.markdown}
            escapeHtml={false}
            renderers={renderers}
          ></ReactMarkdown>
        </MDBContainer>
      </div>
    );
  }
}
