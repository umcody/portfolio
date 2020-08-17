import React from "react";
import Footer from "components/Footer";
import Project from "components/Project";
import ProjectData from "utility/Project-data";


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const projects = ProjectData.slice(0, 3);
    return (
      <div id="page" className="page">
        <div className="home">
          <div className="container" >
            <div className="section" style = {{marginTop:"20%",height: "70vh"}}>
              <div className="row">
                <div className="col-md-12 col-lg-7">
                  <h5 className="home-heading">
                  Hi! I am Cody (Yun Su) Um. I am a developer studying in U.W Madison.
                  </h5>
                  <p className="home-desc">I love building projects of any kind. ANY. </p>
                  <div className="button-block">
                  </div>
                </div>
              </div>
            </div>

            <div className="section">
              <div className="row">
                <div className="col">
                  <div className="heading">
                    <hr className="heading-line" />
                    <h5 className="heading-text">Personal and Professional Projects</h5>
                  </div>
                </div>
              </div>
            </div>

            {projects.map(project => (
              <Project
                key={project.id}
                name={project.name}
                category={project.category}
                description={project.description}
                image={project.image}
                imageAlt={project.imageAlt}
                url={project.url}
                altUrl={project.altUrl}
                right={project.right}
              />
            ))}

            <div className="section">
              <div className="heading">
                <hr className="heading-line" />
                <h5 className="heading-text">Contact Me</h5>
              </div>
            </div>
            <div className="section contact pt-0">
              <div className="row">
                <div className="col-md-12 col-lg-6">
                  <p className="contact-text">
                    I am all about learning and new challenges. If you have any projects or opportunities, don't hesitate to reach out!
                  </p>
                  <div className="button-block">
                    <a href="um5@wisc.edu" className="button">
                      <span className="button-text">Email Me</span>
                      <div className="button-mask" />
                      <span className="button-icon">
                        <i className="fas fa-long-arrow-alt-right" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
