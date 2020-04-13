import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
import "./NavigationBar.css";

export class NavigationBar extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <MDBNavbar color="unique-color-dark" dark expand="md">
        <MDBNavbarBrand href="/">
          <strong className="white-text">Support Chat</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink exact to="/">
                Kezdőlap
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink exact to="/comparison">
                Összehasonlítás
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Chat megoldások</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="/crisp">Crisp</MDBDropdownItem>
                  <MDBDropdownItem href="/fresh">Freshchat</MDBDropdownItem>
                  <MDBDropdownItem href="/hubspot">HubSpot</MDBDropdownItem>
                  <MDBDropdownItem href="/respond">Respond.io</MDBDropdownItem>
                  <MDBDropdownItem href="/tawk">Tawk.to</MDBDropdownItem>
                  <MDBDropdownItem divider />
                  <MDBDropdownItem href="/livehelper">
                    Live Helper Chat
                  </MDBDropdownItem>
                  <MDBDropdownItem href="/riot">Riot.im</MDBDropdownItem>
                  <MDBDropdownItem href="/rocket">Rocket.Chat</MDBDropdownItem>
                  <MDBDropdownItem href="/zammad">
                    Zammad Community
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <a
                href="https://github.com/nyakaspeter/SupportChat"
                className="waves-effect waves-light nav-link Ripple-parent"
                to="#!"
              >
                <MDBIcon fab icon="github" />
              </a>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}
