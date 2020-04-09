import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import renderers from "react-markdown-github-renderers";
import { PostScribe } from "react-postscribe";
import { MDBContainer } from "mdbreact";
import md from "./Crisp.md";

export class Crisp extends Component {
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
        <PostScribe
          html={`<script type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="670945d4-b6dd-4da9-888c-b670986576d2";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script>`}
        ></PostScribe>
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
