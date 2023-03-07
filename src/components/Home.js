import React, { Fragment } from "react";

export function Home() {
  return (
    <Fragment>
      <section id="home" className="home">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-logo">
            <a className="logo" href="#home">
              <p>
                <span className="logo-1">Radiyah</span>{" "}
                <span className="logo-2">Hassan</span>
              </p>
            </a>
          </div>
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-end">
              <a className="navbar-item" href="#home">
                <i className="fa fa-home fa-2x" aria-hidden="true" />
              </a>
              <a className="navbar-item" href="#about">
                <i className="fa fa-user fa-2x" aria-hidden="true" />
              </a>
              <a className="navbar-item" href="#education">
                <i className="fa fa-graduation-cap fa-2x" aria-hidden="true" />
              </a>
              <a className="navbar-item" href="#project">
                <i className="fa fa-tasks fa-2x" aria-hidden="true" />
              </a>
              <a className="navbar-item" href="#contact">
                <i className="fa fa-phone-square fa-2x" aria-hidden="true" />
              </a>
            </div>
          </div>
        </nav>
        <div className="columns">
          <div className="home-left column is-5 has-text-centered">
            <div className="back">
              <img className="prof-img" src="images/ProfilePic.png" />
            </div>
          </div>
          <div className="home-right column is-align-self-center">
            <div className="text">
              <h1 className="home-text-1 title">Hello There,</h1>
              <p className="home-text-2 subtitle">
                <strong>I'm Radiyah Hassan </strong>
              </p>
              <p className="home-text-3">
                Web Developer | Web Designer | Data Scientist
              </p>
            </div>
            <br /> <br />
            <div className="buttons">
              <button className="download-cv-button">DOWNLOAD CV</button>
            </div>
            <div className="icons">
              <a href="https://www.facebook.com/">
                <i className="fa-brands fa-facebook fa-2x" />
              </a>
              <a href="https://www.twitter.com/">
                <i className="fa-brands fa-square-twitter fa-2x" />
              </a>
              <a href="https://www.instagram.com/">
                <i className="fa-brands fa-instagram fa-2x" />
              </a>
              <a href="https://www.linkedin.com/">
                <i className="fa-brands fa-linkedin fa-2x" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="about">
        <div className="heading-element has-text-centered">
          <p> Who am I?</p>
        </div>
        <div className="rectangles">
          <div className="rectangle-1" />
          <div className="rectangle-2" />
          <div className="rectangle-3" />
        </div>
        <h1 className="about-heading">ABOUT</h1>
        <div className="rectangle" />
        <div className="columns">
          <div className="about-left column has-text-centered is-4">
            <img className="about-image" src="images/about.png" />
          </div>
          <div className="about-right column is-8">
            <div className="container ml-6 mt-5">
              <h1 className="about-title">I'm Radiyah Hassan</h1>
              <p className="para">
                Radiyah Hassan is an Information Systems undergraduate at the
                University of Colombo School of Computing, Sri Lanka. She is an
                outgoing, dedicated and open minded person with a great interest
                in Information Technology. She is a Publicity team Member at
                IEEE Student Branch of UCSC. (Institute of Electrical and
                Electronics Engineers) while also being an active member and a
                coordinator in AIESEC in University of Colombo. She is
                interested in Web Designing and Development and Data science.
                She is a enthusiastic team player and dedicates all her skills
                and talents to develop high-quality and unique products
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="education" className="education">
        <div className="heading-element has-text-centered">
          <p>My Academic Qualifications</p>
        </div>
        <div className="rectangles">
          <div className="rectangle-1" />
          <div className="rectangle-2" />
          <div className="rectangle-3" />
        </div>
        <h1 className="about-heading">EDUCATION</h1>
        <div className="rectangle" />
        <div className="columns">
          <div className="education-left column is-5">
            <div className="year">
              <img className="edu-vect-img" src="images/edu-vect.png" />
            </div>
          </div>
          <div className="education-right column is-7">
            <div className="edu-card">
              <h1 className="edu-title">School Education</h1>
              <img width={200} height={200} src="images/st.pauls.jpeg" />
              <p className="desc">
                Had my school education at St. Paul’s Girls’ School Milagiriya,
                Colombo 05. Passed General Certificate of Education Ordinary
                Level and Advanced level with distinctions
              </p>
            </div>
            <div className="edu-card">
              <h1 className="edu-title">Bachelor of Information Systems</h1>
              <div className="columnns">
                <div className="ucsc-img" style={{ display: "inline-block" }}>
                  <img width={80} height={80} src="images/ucsc.png" />
                </div>
                <p className="text-uni" style={{ display: "inline-block" }}>
                  UNIVERSITY OF COLOMBO SCHOOL OF COMPUTING
                </p>
              </div>
              <p className="desc">
                I am currently reading for my bachelors degree in Information
                Systems at University of Colombo School of Computing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="project">
        <div className="heading-element has-text-centered">
          <p>Latest Works</p>
        </div>

        <h1 className="about-heading">MY PROJECTS</h1>
        <div className="rectangle" />
        <br />
        <div className="columns is-align-center">
          <div className="column is-align-self-center ml-6">
            <img width={300} height={300} src="images/03.jpeg" /> <br />
            <br />
            <div className="buttons">
              <button className="button is-danger is-outlined">
                PHOTOSHOP
              </button>
            </div>
          </div>
          <div className="column is-align-self-center">
            <img width={300} height={300} src="images/02.jpeg" /> <br />
            <br />
            <div>
              <button className="button is-danger is-outlined">
                WEB SITES
              </button>
            </div>
          </div>
          <div className="column is-align-self-center">
            <img width={300} height={300} src="images/01.jpeg" /> <br />
            <br />
            <button className="button is-danger is-outlined">APPS</button>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="heading-element has-text-centered">
          <p>Get In Touch</p>
        </div>
        <div className="rectangles">
          <div className="rectangle-1" />
          <div className="rectangle-2" />
          <div className="rectangle-3" />
        </div>
        <h1 className="about-heading">CONTACT ME</h1>
        <div className="rectangle" />
        <div className="form">
          <div className="line-1 field has-text-centered">
            <div className="control">
              <input className="input" type="text" placeholder="Name*" />
            </div>
          </div>
          <div className="line-1 field has-text-centered pl-1">
            <div className="control">
              <input className="input" type="email" placeholder="E-Mail*" />
            </div>
          </div>
          <div className="field has-text-centered">
            <div className="control">
              <input className="input" type="text" placeholder="Subject*" />
            </div>
          </div>
          <div className="field has-text-centered">
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Your Message*"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="control mt-5">
            <button className="send-button button">SEND</button>
          </div>
        </div>
        <div className="contact-grid">
          <div className="contact-card">
            <i className="fa-solid fa-location-dot" />
            <br />
            <p>
              <strong>Our Address</strong>
            </p>
            <br />
            <p>12, Sea Street, Colombo 05</p>
          </div>
          <div className="contact-card">
            <i className="fa fa-mobile" aria-hidden="true" />
            <br />
            <p>
              <strong>Our Contact No</strong>
            </p>
            <br />
            <p>+94 72 222 3535</p>
          </div>
          <div className="contact-card">
            <i className="fa fa-envelope" aria-hidden="true" />
            <br />
            <p>
              <strong>Our Email</strong>
            </p>
            <br />
            <p>hello@radiyah.com</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Home;
