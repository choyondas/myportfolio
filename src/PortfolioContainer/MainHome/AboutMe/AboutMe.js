import React from "react";
import "./AboutMe.css";
const AboutMe = () => {
  return (
    <div className="about p-5">
      <div id="about" className="container ">
        <center>
          {" "}
          <h2 className="skil-text p-5"> Profile</h2>
          <h4 style={{ color: "white" }}>I'm a creative Web Developer</h4>
        </center>

        <div class="infocardContainer">
          <div id="main">
            <img src="https://i.ibb.co/dDhpTps/20181001-141325-removebg-preview.png"></img>
          </div>
          <div id="textbois">
            <h2>Choyon Das</h2>
            <h4>Creative Web Developer</h4>
            <p className="textWrap">
              I am an allround web developer. I am a junior programmer with good
              <br />
              knowledge of front-end-techniques. I love structure and other and
              I
              <br />
              also stand for quality. I love spending time on fixing little
              details and
              <br />
              optimizing web apps. Also I like working in a team.
            </p>

            <h2>Details</h2>
            <h5>Name:</h5>
            <p>Choyon Das</p>
            <h5>Email:</h5>
            <p>choyondas08@gmail.com</p>

            <h5>Age:</h5>
            <p>23</p>
            <h5>Location</h5>
            <p>Kunming, China</p>

            <div id="hotlinks">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/choyon-das-002a82201/"
              >
                <img
                  id="codepenio"
                  src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-linkedin-3.png"
                ></img>
              </a>

              <a target="_blank" href="https://github.com/choyondas/">
                <img
                  id="codepenio"
                  src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-github-1.png"
                ></img>
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/groups/672904017005673/user/100009408458423"
              >
                <img
                  id="codepenio"
                  src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-facebook-1.png"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
