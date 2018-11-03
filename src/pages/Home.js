import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import project1 from "../assets/img/project1.png";
import blog from "../assets/img/blog.png";

class Home extends React.Component {
  render() {
    return (
      <div className="page page__dark">
        <Header />
        <div className="home">
          <div className="container">
            <div className="section">
              <div className="row">
                <div className="col-md-12 col-lg-7">
                  <h5 className="home-heading">
                    I’m Oluwasegun Omilabu, a freelance front-end developer and designer based in Lagos, Nigeria.
                  </h5>
                  <p className="home-desc">
                    I build websites, develop web and mobile applications and I do graphics design.
                  </p>
                  <div className="button-block">
                    <a href="http://google.com" className="button">
                      <span className="button-text">About Me</span>
                      <div className="button-mask" />
                      <span className="button-icon">
                        <i className="fas fa-long-arrow-alt-right" />
                      </span>
                    </a>
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

            <div className="section">
              <div className="project">
                <div className="row">
                  <div className="col-md-12 col-lg-4">
                    <div className="text-block">
                      <h5 className="project-title">Project Name</h5>
                      <p className="project-category">Category</p>
                      <p className="project-description">
                        A brief description of the project goes here. A brief description of the project goes here. A
                        brief description of the project goes here. A brief description of the project goes here.
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
            </div>

            <div className="section">
              <div className="project project__right">
                <div className="row">
                  <div className="col-md-12 col-lg-4">
                    <div className="text-block">
                      <h5 className="project-title">Project Name</h5>
                      <p className="project-category">Category</p>
                      <p className="project-description">
                        A brief description of the project goes here. A brief description of the project goes here. A
                        brief description of the project goes here. A brief description of the project goes here.
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
            </div>

            <div className="section">
              <div className="project">
                <div className="row">
                  <div className="col-md-12 col-lg-4">
                    <div className="text-block">
                      <h5 className="project-title">Project Name</h5>
                      <p className="project-category">Category</p>
                      <p className="project-description">
                        A brief description of the project goes here. A brief description of the project goes here. A
                        brief description of the project goes here. A brief description of the project goes here.
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
            </div>

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
                    <a href="http://google.com" className="button">
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
