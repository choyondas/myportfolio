import React from "react";
import { NavLink } from "react-router-dom";
import "./Projects.css";
const Projects = () => {
  const projects = [
    {
      id: "1",
      name: "Dassland watch Store",
      img1: "https://i.ibb.co/YWz9QWH/dass2.png",
      img2: "https://i.ibb.co/jfgBd1H/dassland-watch2.png",
      img3: "https://i.ibb.co/rGD5YJz/Screenshot-2021-12-01-013126.png",
      summery: `Users can visit our website without registering, they can also see the products available on our website. If they want to purchase the products they have to
        Register. All the information of the user will be stored in the database.`,
      details: "",
      technology:
        "React, Material UI, React Bootstrap, Node, MongoDB, Firebase",
      UserFunction: "Login, Purchase, Review, My Order.",
      AdminFunction: "Add Product, Manage Orders, Manage Products, Make Admin",
      client: "https://github.com/choyondas/assignment12watchshop",
      server: "https://github.com/choyondas/assignment12server_watchshop",
      live: "https://doctors-portal-c9ad8.web.app/",
    },
    {
      id: "2",
      name: "Fast Food Delivery Websitee",
      img3: "https://i.ibb.co/mbzD7Z4/Screenshot-2021-12-01-133352.png",
      img2: "https://i.ibb.co/FW2RP7J/Screenshot-2021-12-01-133238.png",
      img1: "https://i.ibb.co/ccmQZnG/Screenshot-2021-11-29-211637.png",
      summery: `Users can buy food on this website. If they want to purchase, they have to register or login. After registering users can see their name on the navigation bar and also the logout button.`,
      details: "",
      technology: "React, React Bootstrap, Node, MongoDB, Firebase, Express",
      UserFunction: "Login, Purchase.",
      AdminFunction: "Add Product, Manage Orders, Manage Products, Make Admin",
      client: "https://github.com/choyondas/food-delivery-assignment-11",
      server: "https://github.com/choyondas/food-delivery-assignment11-server",
      live: "https://fir-first-project-395f1.web.app/",
    },

    {
      id: "3",
      name: "Health Care Hospital",
      img1: "https://i.ibb.co/447psz0/Screenshot-2021-12-01-134245.png",
      img2: "https://i.ibb.co/kHsRG9Q/Screenshot-2021-11-29-213122.png",
      img3: "https://i.ibb.co/tmJK33b/Screenshot-2021-12-01-134423.png",
      summery: `People can know the recent information about our hospital. They can contact
      our specialized doctors. They can book a hospital ticket.`,
      details: "",
      technology:
        "React, Material UI, React Bootstrap, Node, MongoDB, Firebase",
      UserFunction: "Login, Medical Services, Contact doctors",

      client: "https://github.com/choyondas/assignment10-healthcare",

      live: "https://clinic-authentication.web.app/",
    },
  ];

  return (
    <div className="bg-pro">
      <div className="container p-5">
        <div>
          <center>
            <h2 className="skil-text">My Projects</h2>
          </center>
          {projects.map((project) => (
            <div>
              <h2 className="mt-5 pt-3">Project No: {project.id}</h2>
              <div class="container5 padPro" key={project.id}>
                <div class="card2">
                  <img src={project.img2} alt="" />
                  <h3 class="title"></h3>

                  <div class="circle">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <circle class="stroke" cx="60" cy="80" r="30" />
                    </svg>
                  </div>
                </div>
                <div class="card2">
                  <img src={project.img3} alt="" />
                  <h3 class="title"></h3>

                  <div class="circle">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <circle class="stroke" cx="60" cy="80" r="30" />
                    </svg>
                  </div>
                </div>
                <div class="card2">
                  <img src={project.img1} alt="" />
                  <h3 class="title"></h3>

                  <div class="circle">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <circle class="stroke" cx="60" cy="80" r="30" />
                    </svg>
                  </div>
                </div>
              </div>
              <h2>{project.name}</h2>
              <p>
                <span>Description: </span>
                {project.summery}
              </p>
              <p>
                <span>Technology: </span>
                {project.technology}
              </p>
              <p>
                <span>User Function: </span>
                {project.UserFunction}
              </p>
              <p>
                <span>Admin Function: </span>
                {project.AdminFunction}
              </p>

              <a
                style={{ color: "white" }}
                target="_blank"
                href={project.client}
              >
                {" "}
                Client Side link
              </a>
              <a
                style={{ color: "white", marginLeft: "20px" }}
                target="_blank"
                href={project.server}
              >
                {" "}
                Server Side link
              </a>
              <a
                style={{ color: "white", marginLeft: "20px" }}
                target="_blank"
                href={project.live}
              >
                {" "}
                Live Site link
              </a>
            </div>
          ))}
        </div>

        <center>
          <div className="bottomPro">
            <div className="pt-5">
              <a
                href="ChoyonDas-web-developer-resume.pdf"
                download="ChoyonDas-web-developer-resume.pdf"
              >
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>

            <div className="pt-5">
              <NavLink to="/">
                <button className="btn highlighted-btn1">Home</button>
              </NavLink>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
};

export default Projects;
