import React from "react";
import { Link } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";
import Project from "components/Project";
import remita from "../assets/img/remita.jpg";
import osp from "../assets/img/osp.jpg";
import reliance from "../assets/img/reliance.jpg";
import blog from "../assets/img/blog.png";
import About from "components/About";
import Loading from "components/Loader";
class Home extends React.Component {
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
      }
    ];
    return (
      <div id="page" className="page">
        {/* <Loading show /> */}
        <Header toggleModal={this.toggleModal} />
        <About showModal={this.state.modal} modalFunc={this.toggleModal} />
        <div className="home">
          <div className="container">
            <div className="section">
              <div className="row">
                <div className="col-md-12 col-lg-7">
                  <h5 className="home-heading">
                    I’m Olusegun Omilabu, a freelance front-end developer and designer based in Lagos, Nigeria.
                  </h5>
                  <p className="home-desc">I build websites, develop web and mobile applications and I do design.</p>
                  <div className="button-block">
                    <Link to="#" className="button" onClick={this.toggleModal}>
                      <span className="button-text">About Me</span>
                      <div className="button-mask" />
                      <span className="button-icon">
                        <i className="fas fa-long-arrow-alt-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="section">
              <div className="row">
                <div className="col">
                  <div className="heading">
                    <hr className="heading-line" />
                    <h5 className="heading-text">selected works</h5>
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

            <div className="section whatIDo">
              <div className="row">
                <div className="col-md-12 col-lg-9 col-xl-5 skills-block">
                  <div className="heading">
                    <hr className="heading-line" />
                    <h5 className="heading-text">What i do</h5>
                  </div>
                  <div className="skills">
                    <div className="skill-list">
                      <div>
                        <div className="skill-icon">
                          <i className="fas fa-code" />
                        </div>
                      </div>
                      <div>
                        <div className="skill-textbox">
                          <h5 className="skill-title">Development</h5>
                          <p className="skill-description">
                            Websites, web applications, mobile applications, e-commerce solutions and front-end
                            development.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="skill-list">
                      <div>
                        <div className="skill-icon">
                          <i className="far fa-object-ungroup" />
                        </div>
                      </div>
                      <div>
                        <div className="skill-textbox">
                          <h5 className="skill-title">Design</h5>
                          <p className="skill-description">
                            UI/UX design, wireframes, prototypes, graphics design, branding, etc.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-7 image-block">
                  <div className="image">
                    <img src={blog} className="img-fluid" alt="project1" />
                  </div>
                </div>
              </div>
            </div>

            <div className="section">
              <div className="heading">
                <hr className="heading-line" />
                <h5 className="heading-text">Let's work</h5>
              </div>
            </div>
            <div className="section contact pt-0">
              <div className="row">
                <div className="col-md-12 col-lg-6">
                  <p className="contact-text">
                    I’m always up for new challenges. Let’s discuss your next project or idea and create something
                    awesome together.
                  </p>
                  <div className="button-block">
                    <a href="mailto:omilabuolusegun@gmail.com" className="button">
                      <span className="button-text">Say Hello</span>
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
