import React from "react";

import "./App.css";

class App extends React.Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: ""
  };

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = async evt => {
    evt.preventDefault();
    const templateId = "template_7y3CQmN6";
    await this.sendFeedback(templateId, {
      subject_html: this.state.subject,
      message_html: this.state.message,
      from_name: this.state.name,
      reply_to: this.state.email
    });
    this.setState({ name: "", email: "", subject: "", message: "" });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
  };

  sendFeedback(templateId, variables) {
    window.emailjs
      .send("gmail", templateId, variables)
      .then(res => {
        console.log("Email successfully sent!");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  }

  render() {
    return (
      <>
        {/* <!-- Icon Bar (Sidebar - hidden on small screens) --> */}
        <nav
          className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center"
          id="myNavbar"
        >
          {/* <!-- Avatar image in top left corner --> */}
          <img
            src="https://i.imgur.com/LpsG1Zq.jpg"
            alt="smoke"
            style={{ width: "100%" }}
          />
          <a
            href="/portfolio"
            className="w3-bar-item w3-button w3-padding-large w3-black"
          >
            <i className="fa fa-home w3-xxlarge" style={{ color: "red" }}></i>
            <p style={{ color: "red" }}>HOME</p>
          </a>
          <a
            href="#about"
            className="w3-bar-item w3-button w3-padding-large w3-hover-black"
          >
            <i className="fa fa-user w3-xxlarge"></i>
            <p>ABOUT</p>
          </a>
          <a
            href="#skills"
            className="w3-bar-item w3-button w3-padding-large w3-hover-black"
          >
            <i className="fa fa-code w3-xxlarge"></i>
            <p>SKILLS</p>
          </a>
          <a
            href="#projects"
            className="w3-bar-item w3-button w3-padding-large w3-hover-black"
          >
            <i className="fa fa-eye w3-xxlarge"></i>
            <p>PROJECTS</p>
          </a>
          <a
            href="#contact"
            className="w3-bar-item w3-button w3-padding-large w3-hover-black"
          >
            <i className="fa fa-envelope w3-xxlarge"></i>
            <p>CONTACT</p>
          </a>
        </nav>

        {/* <!-- Navbar on small screens (Hidden on medium and large screens) --> */}
        <div className="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
          <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
            <a
              href="/portfolio"
              className="w3-button mobile-nav-btn"
              style={{ width: "25% !important" }}
            >
              HOME
            </a>
            <a
              href="#about"
              className="w3-button mobile-nav-btn"
              style={{ width: "25% !important" }}
            >
              ABOUT
            </a>
            <a
              href="#skills"
              className="w3-button mobile-nav-btn"
              style={{ width: "25% !important" }}
            >
              SKILLS
            </a>
            <a
              href="#projects"
              className="w3-button mobile-nav-btn"
              style={{ width: "25% !important" }}
            >
              PROJECTS
            </a>
            <a
              href="#contact"
              className="w3-button mobile-nav-btn"
              style={{ width: "25% !important" }}
            >
              CONTACT
            </a>
          </div>
        </div>

        {/* <!-- Page Content --> */}
        <div className="w3-padding-large" id="main">
          {/* <!-- Header/Home --> */}
          <header
            className="w3-container w3-padding-32 w3-center w3-black"
            id="home"
          >
            <h1 className="w3-jumbo"> Tyler Villa </h1>
            <p>Software Engineer</p>
            <img
              src="https://i.imgur.com/6Dd7vZa.jpg"
              alt="boy"
              className="w3-image"
              id="HeadShot"
              style={{ width: "400px" }}
            />
          </header>

          {/* <!-- About Section --> */}
          <div
            className="w3-content w3-justify w3-text-grey w3-padding-64"
            id="about"
          >
            <h2
              className="w3-text-light-grey"
              style={{
                textShadow: "1px -2px rgb(100, 11, 11)",
                fontWeight: "800"
              }}
            >
              About Me
            </h2>
            <hr style={{ width: "200px" }} className="w3-opacity" />

            <p style={{ fontSize: "20px" }}>
              Hello There! Thanks for checking out my Portfolio! Three years of
              high school robotics opened a new perspective to understanding how
              machines work and how to comunicate to them. This new perspective
              developed a fascination inside me to learn how sites and
              applications I used daily worked and to create my own and delve
              into the Programming world more! Graduating out of high school, I
              looked to the amazing city of San Francisco to grow and expand my
              knowledge on the technical world! Thus, my experiences with
              General Assembly began. In twelve short weeks of GA's Software
              Engineering Immersive(SEI), I've tapped on a newly found desire to
              learn to code anything and everything I can! As a graduate from
              GA's SEI, I look to expand my base of knowledge even more through
              collaborative work with other developers and through vast amounts
              of technical problems!
            </p>
          </div>
          <div className="w3-padding-64 w3-content" id="skills">
            <h2
              className="w3-text-light-grey"
              style={{
                textShadow: "1px -2px rgb(100, 11, 11)",
                fontWeight: "800"
              }}
            >
              My Skills
            </h2>
            <hr
              style={{ width: "200px", paddingBottom: "32px" }}
              className="w3-opacity"
            />
            <ul className="w3-wide w3-ul">
              <h5 className="w3-col w3-text-gray">Languages and Frameworks</h5>
              <div className="w3-third">
                <li className="w3-li gray-bord-bot"></li>
                <li className="w3-li w3-text-white gray-bord-bot">
                  JavaScript
                </li>
                <li className="w3-li w3-text-white gray-bord-bot">React</li>
                <li className="w3-li w3-text-white add-bord-bot">Python 3</li>
                <li className="w3-li hide-li"></li>
              </div>
              <div className="w3-third">
                <li className="w3-li gray-bord-bot hide-li"></li>
                <li className="w3-li w3-text-white add-bord-bot">Node.js</li>
                <li className="w3-li w3-text-white gray-bord-bot">HTML5</li>
                <li className="w3-li w3-text-white gray-bord-bot">CSS3</li>
                <li className="w3-li hide-li"></li>
              </div>
              <div className="w3-third">
                <li className="w3-li gray-bord-bot hide-li"></li>
                <li className="w3-li w3-text-white gray-bord-bot">Bootstrap</li>
                <li className="w3-li w3-text-white gray-bord-bot">
                  Materialize
                </li>
                <li className="w3-li w3-text-white gray-bord-bot">VS Code</li>
                <li className="w3-li gray-bord-bot"></li>
              </div>
            </ul>
            <ul className="w3-wide w3-ul">
              <h5 className="w3-col w3-text-gray">Server-Side and Database</h5>
              <div className="w3-half">
                <li className="w3-li gray-bord-bot"></li>
                <li className="w3-li w3-text-white gray-bord-bot">Express</li>
                <li className="w3-li w3-text-white gray-bord-bot">
                  PostgreSQL
                </li>
                <li className="w3-li w3-text-white gray-bord-bot">Mongoose</li>
                <li className="w3-li w3-text-white add-bord-bot">MongoDB</li>
                <li className="w3-li hide-li"></li>
              </div>
              <div className="w3-half">
                <li className="w3-li gray-bord-bot hide-li"></li>
                <li className="w3-li w3-text-white gray-bord-bot">OAuth</li>
                <li className="w3-li w3-text-white gray-bord-bot">Passport</li>
                <li className="w3-li w3-text-white gray-bord-bot">Amazon S3</li>
                <li className="w3-li w3-text-white gray-bord-bot">Heroku</li>
                <li className="w3-li gray-bord-bot"></li>
              </div>
            </ul>
            <ul className="w3-wide w3-ul">
              <h5 className="w3-col w3-text-gray">
                Version Control and Workflow Management
              </h5>
              <div className="w3-half">
                <li className="w3-li gray-bord-bot"></li>
                <li className="w3-li w3-text-white gray-bord-bot">Git</li>
                <li className="w3-li w3-text-white gray-bord-bot">GitHub</li>
                <li className="w3-li w3-text-white add-bord-bot">
                  Command Line
                </li>
                <li className="w3-li hide-li"></li>
              </div>
              <div className="w3-half">
                <li className="w3-li gray-bord-bot hide-li"></li>
                <li className="w3-li w3-text-white gray-bord-bot">Trello</li>

                <li className="w3-li w3-text-white gray-bord-bot">Figma</li>
                <li className="w3-li gray-bord-bot"></li>
              </div>
            </ul>
            <ul className="w3-wide w3-ul">
              <h5 className="w3-col w3-text-gray">Methodologies</h5>
              <div className="w3-half">
                <li className="w3-li gray-bord-bot"></li>

                <li className="w3-li w3-text-white gray-bord-bot">
                  MVC Pattern
                </li>
                <li className="w3-li w3-text-white mobile-bord-bot">
                  Object-Oriented Programming
                </li>
              </div>
              <div className="w3-half">
                <li className="w3-li gray-bord-bot hide-li"></li>
                <li className="w3-li w3-text-white gray-bord-bot">
                  Wireframing
                </li>
                <li className="w3-li w3-text-white gray-bord-bot">
                  User Stories
                </li>
                <li className="w3-li w3-text-white gray-bord-bot">
                  Responsive Design
                </li>
              </div>
            </ul>
            <div className="w3-col add-bord-top" />
            <div className="w3-bar-block"></div>
          </div>

          {/* <!-- Main Portfolio Content--> */}
          <div className="w3-padding-64 w3-content" id="projects">
            <h2
              className="w3-text-light-grey"
              style={{
                textShadow: "1px -2px rgb(100, 11, 11)",
                fontWeight: "800"
              }}
            >
              My Projects
            </h2>
            <hr style={{ width: "200px" }} className="w3-opacity" />

            {/* <!-- Grid for projects --> */}

            <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
              <div className="w3-half">
                <div className="project-card">
                  <h2 style={{ fontWeight: "700" }}>WeStream</h2>
                  <img
                    src="https://i.imgur.com/NeCJEHh.png"
                    alt="WeStream"
                    className="project-img"
                  />
                  <p className="project-description">
                    For my Software Engineering immersive(SEI) final project, I
                    built WeStream!
                  </p>
                  <p className="project-description">
                    WeStream utilizes the power of React, while also
                    implementing back-end services, making it a Fullstack App!
                  </p>
                  <div className="project-link-ctnr">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://westream-tyler-youtube-clone.herokuapp.com/"
                    >
                      <i className="fa fa-external-link w3-hover-opacity w3-xxlarge" />
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/tvilla0000/WeStream"
                    >
                      <i className="fa fa-github w3-hover-opacity w3-xxlarge" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="w3-half">
                <div className="project-card">
                  <h2 style={{ fontWeight: "700" }}>Tasty</h2>
                  <img
                    src="https://i.imgur.com/yAn25C6.png"
                    alt="Tasty"
                    className="project-img"
                  />
                  <p className="project-description">
                    The development of Tasty was started after the introduction
                    of Python in the Immersive!
                  </p>
                  <p className="project-description">
                    Tasty implemented Python and Django as a framework to create
                    a application alike to yelp!
                  </p>
                  <div className="project-link-ctnr">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://menunav.herokuapp.com/"
                    >
                      <i className="fa fa-external-link w3-hover-opacity w3-xxlarge" />
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/tvilla0000/Tasty"
                    >
                      <i className="fa fa-github w3-hover-opacity w3-xxlarge" />
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- End project grid --> */}
            </div>
            {/* <!-- End Of Main Portfolio Content --> */}
          </div>

          {/* <!-- Contact Section --> */}
          <div className="w3-padding-64 w3-content w3-text-grey" id="contact">
            <h2
              className="w3-text-light-grey"
              style={{
                textShadow: "1px -2px rgb(100, 11, 11)",
                fontWeight: "800"
              }}
            >
              Contact Me
            </h2>
            <hr style={{ width: "200px" }} className="w3-opacity" />

            <div className="w3-section">
              <p>
                <i className="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right"></i>{" "}
                San Francisco, US
              </p>
              <p>
                <i className="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right"></i>{" "}
                Phone: &nbsp; 925-350-2272
              </p>
              <p>
                <i className="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right">
                  {" "}
                </i>{" "}
                Email: &nbsp;{" "}
                <a href="mailto:tvilla0000@gmail.com">tvilla0000@gmail.com</a>
              </p>
            </div>
            <br />

            {/* <!-- End Contact Section --> */}
          </div>

          {/* <!-- Footer --> */}
          <footer className="w3-content w3-padding-32 w3-text-grey w3-xlarge">
            <div
              className="w3-col w3-margin-bottom footer-link-ctnr"
              id="network-links"
            >
              <div className="w3-third w3-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/tvilla0000"
                >
                  <i className="fa fa-github w3-hover-opacity w3-jumbo" />
                </a>
              </div>
              <div className="w3-third w3-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/tyler-villa-61ba94190/"
                >
                  <i className="fa fa-linkedin w3-hover-opacity w3-jumbo" />
                </a>
              </div>
              <div className="w3-third w3-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://profiles.generalassemb.ly/profiles/tvilla01"
                >
                  <img
                    src="https://ga-core.s3.amazonaws.com/cms/files/files/000/000/886/original/ga-logo-gear.png"
                    id="GA-logo"
                  />
                </a>
              </div>
            </div>
            {/* <!-- End footer --> */}
          </footer>

          {/* <!-- END PAGE CONTENT --> */}
        </div>
      </>
    );
  }
}

export default App;
