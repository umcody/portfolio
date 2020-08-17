import React from "react";
import PropTypes from "prop-types";
import { isIOS, isMobile } from "react-device-detect";
import project1 from "../assets/img/project1.png";

class Project extends React.Component {
  isEmpty(str) {
    return !str || 0 === str.length;
  }
  render() {
    return (
      <div className="section">
        <div className={`project ${this.props.right ? "project__right" : ""}`}>
          <div className="row">
            <div className="col-md-12 col-lg-4">
              <div className="text-block">
                <h5 className="project-title">{this.props.name}</h5>
                <p className="project-category">{this.props.category}</p>
                <p className="project-description">{this.props.description}</p>
              </div>
            </div>
            <div className="col-md-12 col-lg-8">
              <div className="image">
                <img src={this.props.image || project1} className="img-fluid" alt={this.props.imageAlt} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Project.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  url: PropTypes.string,
  altUrl: PropTypes.string,
  right: PropTypes.bool
};

export default Project;
