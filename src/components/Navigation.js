import React from "react";
import PropTypes from "prop-types";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import avatar from "../assets/img/myAvatar.png";

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleThemeSwitch = this.toggleThemeSwitch.bind(this);

    this.state = {
      isOpen: false,
      modal: false,
      darkTheme: true
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  toggleThemeSwitch() {
    if (this.state.darkTheme) {
      document.getElementById("page").classList.add("page__light");
    } else {
      document.getElementById("page").classList.remove("page__light");
    }
    this.setState({
      darkTheme: !this.state.darkTheme
    });
  }
  render() {
    return (
      <div className="navigation">
        <Navbar expand="md">
          <NavbarBrand href="/">
            <div className="avatar">
              <img className="img-fluid" src={avatar} alt="avatar" />
            </div>
          </NavbarBrand>

          <div className="mobile-icons">
            <div className="mobile-theme-switch" onClick={this.toggleThemeSwitch}>
              <i className="fas fa-adjust" />
            </div>
            <NavbarToggler onClick={this.toggle} />
          </div>

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#" onClick={this.props.toggleModal}>
                  About
                </NavLink>
              </NavItem>
              <NavItem className={this.props.activeLink === "works" ? "active" : ""}>
                <NavLink href="/works">Works</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="mailto:omilabuolusegun@gmail.com">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" onClick={this.toggleThemeSwitch}>
                  <div className="theme-switch">
                    <i className="fas fa-adjust" />
                  </div>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

Navigation.propTypes = {
  darkTheme: PropTypes.bool,
  activeLink: PropTypes.string,
  toggleModal: PropTypes.func
};

export default Navigation;
