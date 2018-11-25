import React from "react";
import About from "components/About";
import Footer from "components/Footer";
import Header from "components/Header";
import Project from "components/Project";
import ProjectData from "utility/Project-data";

class Works extends React.Component {
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
    const projects = [...ProjectData];
    return (
      <div id="page" className="page page__dark">
        <Header pageTitle="works" toggleModal={this.toggleModal} />
        <About showModal={this.state.modal} modalFunc={this.toggleModal} />
        <div className="home">
          <div className="container">
            <div className="section">
              <div className="row">
                <div className="col">
                  <div className="heading">
                    <hr className="heading-line" />
                    <h5 className="heading-text">My works</h5>
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
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Works;
