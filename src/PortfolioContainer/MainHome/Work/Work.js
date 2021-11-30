import React from "react";
import { NavLink } from "react-router-dom";
import "./Work.css";
const Work = () => {
  return (
    <div>
      <div className="categaryBack">
        <ul className="work">
          <li>ALL</li>
          <li>WEBDESIGN</li>
          <li>DEVELOPMENT</li>
          <li>PHOTOGRAPHY</li>
        </ul>
      </div>

      <section id="blogs" className="backwork p-5">
        <div className="container  ">
          <center>
            <h1 className="skil-text p-4">Blogs</h1>
          </center>
          <div className="row ">
            <div className="col-lg-6 col-md-6 col-12 mb-4 blog-border blog-border1"></div>
            <div className="col-lg-6 col-md-6 col-12 mb-4 blog-border blog-border2"></div>
            <div className="col-lg-6 col-md-6 col-12 mb-4 blog-border blog-border3"></div>
            <div className="col-lg-6 col-md-6 col-12 mb-4 blog-border blog-border4"></div>
          </div>
        </div>
      </section>
      <section className="p-5 backPro">
        <div className="container">
          <center>
            <h1 className="skil-text">My Projects</h1>
          </center>
          <div class="container1">
            <div class="card">
              <div class="box1 box">
                <div class="content">
                  <h2>01</h2>
                  <h3>Dassland watch Store</h3>

                  <p className="back-card-product">
                    Users can visit our website without registering, they can
                    also see the products available on our website. If they want
                    to purchase the products they have to Register.
                  </p>

                  <NavLink to="/projects">Read More</NavLink>

                  {/* <a href="#">Read More</a> */}
                </div>
              </div>
            </div>

            <div class="card">
              <div class="box2 box">
                <div class="content">
                  <h2>02</h2>
                  <h3>Fast Food Delivery Website</h3>
                  <p>
                    Users can buy food on this website. If they want to
                    purchase, they have to register or login.
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="box3 box">
                <div class="content">
                  <h2>03</h2>
                  <h3>Health Care Hospital</h3>
                  <p>
                    People can know the recent information about our hospital.
                    They can contact our specialized doctors. They can book a
                    hospital ticket.
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
