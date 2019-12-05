import React from "react";
import resume from "./media/Resume.pdf";
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
            <i className="fa fa-rocket w3-xxlarge"></i>
            <p>PROJECTS</p>
          </a>
          <a
            href="#contact"
            className="w3-bar-item w3-button w3-padding-large w3-hover-black"
          >
            <i className="fa fa-envelope w3-xxlarge"></i>
            <p>CONTACT</p>
          </a>
          <a
            href={resume}
            target="_blank"
            className="w3-bar-item w3-button w3-padding-large w3-hover-black"
          >
            <i className="fa fa-file-pdf-o w3-xxlarge"></i>
            <p>RESUME</p>
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
            <a
              href={resume}
              target="_blank"
              className="w3-button mobile-nav-btn"
              style={{ width: "25% !important" }}
            >
              RESUME
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

            <p className="bio">
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
                  <img
                    className="Skills-logos"
                    src="https://www.geekstrick.com/wp-content/themes/geekstrick/assets/icons/javascript.svg"
                    alt="Javascript"
                  />
                  JavaScript
                </li>
                <li className="w3-li w3-text-white gray-bord-bot">
                  <img
                    className="Skills-logos"
                    id="react"
                    src="http://maxehnert.com/app/images/react.svg"
                    alt="React"
                  />
                  React
                </li>
                <li className="w3-li w3-text-white add-bord-bot">
                  <img
                    className="Skills-logos"
                    id="python"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png"
                    alt="Python"
                  />
                  Python 3
                </li>
                <li className="w3-li hide-li"></li>
              </div>
              <div className="w3-third">
                <li className="w3-li gray-bord-bot hide-li"></li>
                <li className="w3-li w3-text-white add-bord-bot">
                  <img
                    className="Skills-logos"
                    id="nodejs"
                    src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
                    alt="Node.js"
                  />
                  Node.js
                </li>
                <li className="w3-li w3-text-white gray-bord-bot">
                  <img
                    className="Skills-logos"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
                    alt="HTML5"
                  />
                  HTML5
                </li>
                <li className="w3-li w3-text-white gray-bord-bot">
                  <img
                    className="Skills-logos"
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
                    alt="CSS3"
                  />
                  CSS3
                </li>
                <li className="w3-li hide-li"></li>
              </div>
              <div className="w3-third">
                <li className="w3-li gray-bord-bot hide-li"></li>
                <li className="w3-li w3-text-white gray-bord-bot">
                  <img
                    className="Skills-logos"
                    id="bootstrap"
                    src="data:image/png;base64,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"
                    alt="Bootstrap"
                  />
                  Bootstrap
                </li>
                <li className="w3-li w3-text-white gray-bord-bot">
                  <img
                    className="Skills-logos"
                    id="materialize"
                    src="https://seeklogo.com/images/M/materialize-logo-0FCAD8A6F8-seeklogo.com.png"
                    alt="Materialize"
                  />
                  Materialize
                </li>
                <li className="w3-li w3-text-white gray-bord-bot">
                  <img
                    id="vscode"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png"
                    alt="VS code"
                  />
                  VS Code
                </li>
                <li className="w3-li gray-bord-bot"></li>
              </div>
            </ul>
            <ul className="w3-wide w3-ul">
              <h5 className="w3-col w3-text-gray">Server-Side and Database</h5>
              <div className="w3-half">
                <li className="w3-li gray-bord-bot"></li>
                <li className="w3-li w3-text-white gray-bord-bot">
                  <img
                    className="Skills-logos"
                    id="nodejs"
                    src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
                    alt="express"
                  />
                  Express
                </li>
                <li className="w3-li w3-text-white gray-bord-bot">
                  <img
                    className="Skills-logos"
                    src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
                    alt="PostgreSQL"
                  />
                  PostgreSQL
                </li>
                <li className="w3-li w3-text-white gray-bord-bot">
                  <img
                    className="Skills-logos"
                    id="mongoose"
                    src="https://camo.githubusercontent.com/add74f91a2bcd7370ee73971140a75ad4136baf1/687474703a2f2f6d6f6e676f64622d746f6f6c732e636f6d2f696d672f6d6f6e676f6f73652e706e67"
                    alt="Mongoose"
                  />
                  Mongoose
                </li>
                <li className="w3-li w3-text-white add-bord-bot">
                  <img
                    className="Skills-logos"
                    src="https://cdn.iconscout.com/icon/free/png-256/mongodb-4-1175139.png"
                    alt="MongoDB"
                  />
                  MongoDB
                </li>
                <li className="w3-li hide-li"></li>
              </div>
              <div className="w3-half">
                <li className="w3-li gray-bord-bot hide-li"></li>
                <li className="w3-li w3-text-white gray-bord-bot">
                  <img
                    className="Skills-logos"
                    id="OAuth"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Oauth_logo.svg/598px-Oauth_logo.svg.png"
                    alt="OAuth"
                  />
                  OAuth
                </li>
                <li className="w3-li w3-text-white gray-bord-bot">
                  <img
                    className="Skills-logos"
                    id="passportjs"
                    src="https://cdn.glitch.com/project-avatar/0d184ee3-fd8d-4b94-acf4-b4e686e57375.png?2016-11-21T13:18:58.896Z"
                    alt="Passport.js"
                  />
                  Passport
                </li>
                <li className="w3-li w3-text-white gray-bord-bot">
                  <img
                    className="Skills-logos"
                    id="AWS"
                    src="https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg"
                    alt="AWS"
                  />
                  Amazon S3
                </li>
                <li className="w3-li w3-text-white gray-bord-bot">
                  <img
                    className="Skills-logos"
                    id="heroku"
                    src="https://icon-library.net/images/heroku-icon/heroku-icon-27.jpg"
                    alt="Heroku"
                  />
                  Heroku
                </li>
                <li className="w3-li gray-bord-bot"></li>
              </div>
            </ul>
            <ul className="w3-wide w3-ul">
              <h5 className="w3-col w3-text-gray">
                Version Control and Workflow Management
              </h5>
              <div className="w3-half">
                <li className="w3-li gray-bord-bot"></li>
                <li className="w3-li w3-text-white gray-bord-bot">
                  <img
                    className="Skills-logos"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1024px-Git_icon.svg.png"
                    alt="Git"
                  />
                  Git
                </li>
                <li className="w3-li w3-text-white gray-bord-bot">
                  <img
                    className="Skills-logos"
                    id="github"
                    src="https://image.flaticon.com/icons/svg/25/25231.svg"
                    alt="Github"
                  />
                  GitHub
                </li>
                <li className="w3-li w3-text-white add-bord-bot">
                  <img
                    className="Skills-logos"
                    id="command-line"
                    src="https://cdn2.iconfinder.com/data/icons/computer-network-12/512/consol-512.png"
                    alt="Command Line"
                  />
                  Command Line
                </li>
                <li className="w3-li hide-li"></li>
              </div>
              <div className="w3-half">
                <li className="w3-li gray-bord-bot hide-li"></li>
                <li className="w3-li w3-text-white gray-bord-bot">
                  <img
                    className="Skills-logos"
                    id="trello"
                    src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Trello-512.png"
                    alt="trello"
                  />
                  Trello
                </li>

                <li className="w3-li w3-text-white gray-bord-bot">
                  <img
                    className="Skills-logos"
                    src="https://cdn.worldvectorlogo.com/logos/figma-1.svg"
                    alt="Figma"
                  />
                  Figma
                </li>
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
                <a
                  href="mailto:tylervilla65@gmail.com"
                  style={{ textDecoration: "none" }}
                >
                  tylervilla65@gmail.com
                </a>
              </p>
              <p>
                <i className="	fa fa-twitter fa-fw w3-text-white w3-xxlarge w3-margin-right"></i>
                Twitter: &nbsp;
                <a href="https://twitter.com/TylerVilla11">Tyler Villa</a>
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
                  <i className="fa fa-address-card-o w3-hover-opacity w3-jumbo"></i>
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
