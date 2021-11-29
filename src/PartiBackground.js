import React from "react";

import Particles from "react-tsparticles";
import particleConfig from "./Config/ParticleConfig";

export default function PartiBackground() {
  return <Particles params ={particleConfig}></Particles>;
}
