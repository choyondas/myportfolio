import React from "react";
import "./MySkills.css";
const MySkills = () => {
  const fakeData = [
    {
      name: "HTML",
      pacent: "90",
    },
    {
      name: "CSS",
      pacent: "90",
    },
    {
      name: "JavaScript",
      pacent: "80",
    },
    {
      name: "React",
      pacent: "80",
    },
    {
      name: "Node",
      pacent: "85",
    },
    {
      name: "Firebase",
      pacent: "80",
    },
    {
      name: "Express",
      pacent: "80",
    },
    {
      name: "MongoDB",
      pacent: "80",
    },
    {
      name: "Bootstrap",
      pacent: "90",
    },
    {
      name: "Material UI",
      pacent: "80",
    },
  ];

  return (
    <div className="skill">
      <div className="container  p-4 ">
        <center>
          <h1 className="skil-text">My Skils</h1>
        </center>
        <br />
        <br />
        <div className="row container2 mx-auto">
          {fakeData.slice(0, 8).map((data) => (
            <div className="col-lg-2 m-3 col-md-5 ">
              <div class="card">
                <div class="box">
                  <div class="percent">
                    <svg />
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                    <svg />
                    <div class="num">
                      <h2>
                        {data.pacent}
                        <span>%</span>
                      </h2>
                    </div>
                  </div>
                  <h2 class="text">{data.name}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySkills;
