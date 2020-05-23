import React, { Component } from "react";
import { MDBContainer, MDBMask, MDBRow, MDBCol } from "mdbreact";
import { MarkdownComponent } from "./MarkdownComponent";
import "./Home.css";

export class Home extends Component {
  render() {
    return (
      <div>
        <div className="bg">
          <MDBMask
            overlay="black-strong"
            className="flex-center justify-content-center align-items-center gradient"
          >
            <MDBContainer className="px-md-3 px-sm-0">
              <MDBRow>
                <MDBCol md="12" className="mb-4 white-text text-center">
                  <h3 className="display-3 font-weight-bold mb-0 pt-md-5">
                    Support Chat
                  </h3>
                  <hr className="hr-light my-4 w-75" />
                  <h4 className="subtext-header mt-2 mb-4">
                    Ingyenesen elérhető support-chat megoldások
                  </h4>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </div>
        <MarkdownComponent markdown="Home.md" script="" />
      </div>
    );
  }
}
