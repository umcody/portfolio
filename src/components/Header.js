import React from "react";
import Navigation from "./Navigation";
import PropTypes from "prop-types";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <Navigation activeLink={this.props.pageTitle || ""} toggleModal={this.props.toggleModal} />
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  pageTitle: PropTypes.string,
  toggleModal: PropTypes.func
};

export default Header;
