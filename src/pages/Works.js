import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import Project from "components/Project";
import remita from "../assets/img/remita.jpg";
import osp from "../assets/img/osp.jpg";
import reliance from "../assets/img/reliance.jpg";
import stabintel from "../assets/img/stabintel.jpg";
import About from "components/About";
class Works extends React.Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);

    this.state = {
      modal: false
    };
  }
  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    const projects = [
      {
        id: 1,
        name: "Remita",
        category: "Web design",
        description:
          "Remita is an all-in-one mobile app that allows you switch between your personal and corporate profiles on your device so you authorise payments quickly.",
        image: remita,
        imageAlt: "remita",
        url: "https://www.remita.net/mobileapp/",
        right: false
      },
      {
        id: 2,
        name: "Reliance",
        category: "Web design",
        description:
          "Reliance is a home care agency that shares a passion for meeting the physical, social, emotional and health care needs of consumers and their family.",
        image: reliance,
        imageAlt: "reliance",
        url: "http://rfcservice.com",
        right: true
      },
      {
        id: 3,
        name: "OSP DPR",
        category: "Mobile app",
        description:
          "The OSP (Offshore Safety Permit) Project was introduced by the DPR for Safety and Personnel Accountability of all offshore workers within the Nigerian Oil and Gas Industry.",
        image: osp,
        imageAlt: "osp",
        url: "https://play.google.com/store/apps/details?id=com.wael.dprosp.app",
        right: false
      },
      {
        id: 4,
        name: "Stabintel",
        category: "Web design",
        description:
          "A technology company that specializes in developing top tier software engineering solutions designed to elevate your business",
        image: stabintel,
        imageAlt: "stabintel",
        url: "http://stabintel.com.s3-website-us-east-1.amazonaws.com/",
        right: true
      }
    ];
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
