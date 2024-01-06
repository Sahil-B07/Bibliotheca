"use client"
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

import Scene from "../Canvas";
import TypewriterShade from "../../Utils/Shadow";
import CamControl from "@/Utils/CamControl";

const Typewriter = ({isMobile}) => {
  return (
    <Scene
      height={"60vh"}
      width={"45vw"}
      smHeight={"35vh"}
      smWidth={"80vw"}
      color={"white"}
      camPos={[6, 5, 6]}
      target={[0, 1, 0]}
      fov={60}
      DlightPos={[6, 5, 0]}
      Dintensity={2}
      SpColor={"orange"}
      SpIntensity={50}
      SpLightPos={[2, 10, 0]}
      SpDistance={14}
      ambIntensity={1}
      opacity={0.3}
      mobFov={35}
    >
      <TypewriterModel isMobile={isMobile}/>
    </Scene>
  );
};

const TypewriterModel = ({isMobile}) => {
  let model = TypewriterShade("/ModelFiles/typewriter/Typewriter.glb");


  const modelRef = useRef();
  var delta = 0;
  useFrame(() => {
    delta += 0.003;
    if (modelRef.current) {
      modelRef.current.rotation.y = -delta;
    }
  });


// on mouse move
CamControl(modelRef)

  return (
    <>
      <group ref={modelRef} position={[0, 0, 0]}>
        <mesh castShadow>
          <primitive
            object={model.scene}
            scale={isMobile ? 2 : 3}
            position={[0, 1.5, 0]}
            rotation={[0, 0, 0]}
          />
        </mesh>
      </group>
    </>
  );
};

export default Typewriter;
