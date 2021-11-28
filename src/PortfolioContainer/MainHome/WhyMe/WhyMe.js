import React from "react";
import "./WhyMe.css";
const WhyMe = () => {
  return (
    <div className="container p-5 ">
      <div>
        <h2>Why Me?</h2>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <h1> I help you to make beautiful websites</h1>
            <p>lorem ipsum dolor sit amet, consectetur adip</p>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="row">
              <div className="col-lg-6 col-md-6 ">
                <li>Web design</li>
                <hr />
              </div>
              <div className="col-lg-6 col-md-6 ">
                <li>Front-end development</li>
                <hr />
              </div>
              <div className="col-lg-6 col-md-6 ">
                <li>Responsive Design</li>
                <hr />
              </div>
              <div className="col-lg-6 col-md-6 ">
                <li>User experience</li>
                <hr />
              </div>
              <div className="col-lg-6 col-md-6 ">
                <li>Outstanding Look</li>
                <hr />
              </div>
              <div className="col-lg-6 col-md-6 ">
                <li>Details functionality</li>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyMe;
