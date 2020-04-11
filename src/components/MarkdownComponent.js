import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import renderers from "react-markdown-github-renderers";
import { MDBContainer } from "mdbreact";

export class MarkdownComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { markdown: null };
  }

  componentWillMount() {
    fetch("/markdown/" + this.props.markdown)
      .then((res) => res.text())
      .then((text) => {
        this.setState({ markdown: text });
      });
  }

  render() {
    return (
      <div>
        <MDBContainer className="text-justify my-4">
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
