import React from "react";
import Profile from "../Home/Profile";
import Navigation from "../shared/Navigation/Navigation";
import AboutMe from "./AboutMe/AboutMe";
import ContactMe from "./ContactMe/ContactMe";
import MySkills from "./MySkills/MySkills";
import WhyMe from "./WhyMe/WhyMe";
import Work from "./Work/Work";

const MainHome = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Profile></Profile>

      <Work></Work>
      <WhyMe></WhyMe>
      <MySkills></MySkills>
      <AboutMe></AboutMe>
      <ContactMe></ContactMe>
    </div>
  );
};

export default MainHome;
