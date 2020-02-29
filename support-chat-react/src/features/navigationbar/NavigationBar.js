import React from "react";
import { Nav, Navbar } from "react-bootstrap";

export const NavigationBar = () => (
  <Navbar bg="light">
    <Navbar.Brand href="/">Support Chat</Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Item>
        <Nav.Link href="/">Kezdőlap</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/counter">Counter</Nav.Link>
      </Nav.Item>
    </Nav>
  </Navbar>
);
