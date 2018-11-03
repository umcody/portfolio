import React from "react";
import project1 from "../assets/img/project1.png";

class Project extends React.Component {
  render() {
    return (
      <div className="project">
        <div className="row">
          <div className="col-md-12 col-lg-4">
            <div className="text-block">
              <h5 className="project-title">Project Name</h5>
              <p className="project-category">Category</p>
              <p className="project-description">
                A brief description of the project goes here. A brief description of the project goes here. A brief
                description of the project goes here. A brief description of the project goes here.
              </p>
              <a href="http://google.com" className="button button__secondary" title="">
                <span className="button-text">view project</span>
                <div className="button-mask" />
                <span className="button-icon">
                  <i className="fas fa-long-arrow-alt-right" />
                </span>
              </a>
            </div>
          </div>
          <div className="col-md-12 col-lg-8">
            <div className="image">
              <img src={project1} className="img-fluid" alt="project1" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
