"use client"
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import React, { useRef } from "react";
import Scene from "../Canvas";
import CamControl from "@/Utils/CamControl";

const DisSphere = () => {

  const modelRef = useRef();
// on mouse move
CamControl(modelRef)
  
  return (
    <Scene
      height={"70vh"}
      width={"70vh"}
      smHeight={"35vh"}
      smWidth={"40vh"}
      color={"white"}
      camPos={[0, 3, 5]}
      target={[0, 0, 0]}
      fov={70}
      mobFov={60}
      DlightPos={[3, 2, 1]}
      Dintensity={4}
    >
      <Sphere args={[1, 100, 200]} scale={2.7} ref={modelRef}>
        <MeshDistortMaterial
          color={"#9E58AA"}
          attach={"material"}
          distort={0.5}
          speed={2}
        />
      </Sphere>
    </Scene>
  );
};

export default DisSphere;
