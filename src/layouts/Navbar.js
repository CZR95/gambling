import React, { Component } from "react";

// Load logo image path
import logo from "../images/logo/kk_casino_logo.svg";

// react-router-dom
import { Link } from "react-router-dom";

// react-bootstrap
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

class Navbar_2 extends Component {
  render() {
    return (
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        className="px-5 font-family-1"
      >
        <Navbar.Brand as={Link} to="/home">
          {/* Logo */}
          <img src={logo} className="img-fluid" alt="kk-casino-logo" />
          {/* Text */}
          {/* EliteStudio */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="mt-3" id="basic-navbar-nav">
          {/* left-menu */}
          <Nav className="mr-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}

            <Nav.Link as={Link} to="/gambling/home" className="mx-2 ">
              <span className="font-size-3 ">{this.props.t("menu_home")}</span>
            </Nav.Link>
            <Link
              to="route"
              target="_blank"
              onClick={(event) => {
                event.preventDefault();
                window.open(this.makeHref("route"));
              }}
            />
            <Nav.Link
              as={Link}
              to=""
              target="_blank"
              onClick={(event) => {
                event.preventDefault();
                window.open("http://www.1stopdownload.com/");
              }}
              className="mx-2 "
            >
              <span className="font-size-3">{this.props.t("menu_games")}</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/gambling/promotion" className="mx-2 ">
              <span className="font-size-3 ">
                {this.props.t("menu_promotion")}
              </span>
            </Nav.Link>
            <Nav.Link as={Link} to="/gambling/contact" className="mx-2">
              <span className="font-size-3">
                {this.props.t("menu_contact")}
              </span>
            </Nav.Link>
          </Nav>
          {/* right-menu */}
          <Nav>
            <NavDropdown
              title={this.props.t("menu_language")}
              id="basic-nav-dropdown"
              className=""
            >
              <NavDropdown.Item onClick={() => this.props.changeLanguage("en")}>
                {this.props.t("english")}
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => this.props.changeLanguage("cn_simp")}
              >
                {this.props.t("chinese")}
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => this.props.changeLanguage("my")}>
                {this.props.t("malay")}
              </NavDropdown.Item>

              {/* <NavDropdown.Divider /> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navbar_2;
