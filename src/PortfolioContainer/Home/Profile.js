import React from "react";
import Typical from "react-typical";
import Particles from "react-tsparticles";
import "./Profile.css";
const Profile = () => {
  const particlesInit = (main) => {
    console.log(main);
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="profile-container p-5 ">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 100,
                duration: 2,
                opacity: 0.8,
                size: 20,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: true,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 3,
            },
          },
          detectRetina: true,
        }}
      />

      <div className="container">
        <div className="profile-parent row">
          <div className="profile-details col-lg-7 col-md-7 col-12 ">
            <div className="colz">
              <div className="colz-icon">
                <a href="https://www.linkedin.com/in/choyon-das-002a82201/">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="https://www.facebook.com/liptondas.liptondas.3">
                  <i className="fa fa-facebook-square"></i>
                </a>
                <a href="#">
                  <i className="fa fa-google-plus-square"></i>
                </a>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="https://twitter.com/ChoyonDas17">
                  <i className="fa fa-twitter-square"></i>
                </a>
              </div>
            </div>

            <div className="profile-details-name">
              <span className="creative-text">
                Creative Product <br />
                <span className="main-text">Designer</span>
              </span>
            </div>
            <div className="profile-details-role">
              <span className="primary-text"></span>
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev🔶 ",
                    1000,
                    "Full Stack Developer💻",
                    1000,
                    "MERN Stack Dev 🙋",
                    1000,
                    "Cross Platform 🧑‍💻",
                    1000,
                    "React/React Native 🔴",
                    1000,
                  ]}
                ></Typical>
              </h1>

              <span className="profile-role-tagline">
                The true ENTREPRENEUR is a risk taker, not an excuse maker.
              </span>
            </div>

            <div className="profile-options">
              <button className="btn primary-btn">Hire me</button>
              <a
                href="ChoyonDas-web-developer-resume.pdf"
                download="ChoyonDas-web-developer-resume.pdf"
              >
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>

          <div className="profile-picture col-lg-5 col-md-5 col-12">
            <div className="profile-picture-background img-fluid"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
