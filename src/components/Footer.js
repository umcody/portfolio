import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-icons">
            <a className="footer-link" href="http://google.com">
              <i className="fab fa-linkedin-in" />
            </a>
            <a className="footer-link" href="http://google.com">
              <i className="fab fa-twitter" />
            </a>
            <a className="footer-link" href="http://google.com">
              <i className="fab fa-codepen" />
            </a>
            <a className="footer-link" href="http://google.com">
              <i className="fab fa-github" />
            </a>
            <a className="footer-link" href="http://google.com">
              <i className="fab fa-codepen" />
            </a>
          </div>
          <div className="copyright">
            <p className="copyright-text">&copy; 2018 segun omilabu</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
