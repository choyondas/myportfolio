import React from "react";
import { NavLink } from "react-router-dom";
import "./Projects.css";
const Projects = () => {
  const projects = [
    {
      id: "1",
      name: "Dassland watch Store",
      img1: "https://i.ibb.co/47Y5Yz1/Screenshot-2021-12-03-152134.png",

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

      img1: "https://i.ibb.co/Y7KC5FX/Screenshot-2021-12-03-160554.png",
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
      img1: "https://i.ibb.co/TqWxt2J/Screenshot-2021-12-03-163047.png",

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
            <h2 className="description">My Projects</h2>
          </center>
          {projects.map((project) => (
            <div className="container">
              <h2 className="mt-5 pt-3">Project No: {project.id}</h2>
              <div class="container5 padPro" key={project.id}>
                <div class="card2">
                  <img className="img-fluid" src={project.img1} alt="" />
                  <h3 class="title"></h3>
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

              <a target="_blank" href={project.client}>
                {" "}
                Client Side link
              </a>
              <a
                style={{ marginLeft: "20px" }}
                target="_blank"
                href={project.server}
              >
                {" "}
                Server Side link
              </a>
              <a
                style={{ marginLeft: "20px" }}
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
