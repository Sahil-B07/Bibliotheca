import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations } from "@react-three/drei";
import RadioShade from "../../Utils/Shadow";
import Scene from "../Canvas";
import RadioMusic from "../../Audio/radioMusic";
import CamControl from "@/Utils/CamControl";

const Radio = (props) => {
  
  return (
    <Scene
      height={"75vh"}
      width={"45vh"}
      smHeight={"55vh"}
      smWidth={"45vh"}
      color={"white"}
      camPos={[0, 5.3, 13]}
      target={[0, 2, 0]}
      mobFov={23}
      fov={25}
      DlightPos={[6, 5, 0]}
      Dintensity={2}
      SpColor={"#a41db0"}
      SpIntensity={50}
      SpLightPos={[1, 4, 2.5]}
      SpDistance={14}
      ambIntensity={2.5}
    >
      <RadioModel {...props} />
    </Scene>
  );
};

const RadioModel = (props) => {
  let model = RadioShade("/ModelFiles/radio/Radio2.glb");
  let base = RadioShade("/ModelFiles/stand/Stool_wood.glb");

  const modelRef = useRef();
  const { actions, names } = useAnimations(model.animations, modelRef);

  var delta = 0;
  useFrame(() => {
    {
      props.radioOnOff ? (delta += 0.003) : null;
    }
    if (props.radioOnOff) {
      modelRef.current.rotation.y = delta;
    }

    // handle radio animation
    {
      props.radioOnOff ? actions[names[0]].play() : actions[names[0]].stop();
    }
  }, []);

// on mouse move
  CamControl(modelRef)

  return (
    <>
      <group ref={modelRef} position={[0, 0, 0]} scale={1.2}>
        {/* Radio */}
        <mesh castShadow>
          <RadioMusic {...props} />
          <primitive
            object={model.scene}
            scale={1}
            position={[0, 1.62, -0.1]}
            rotation={[0, 0, 0]}
          />
        </mesh>
        <mesh receiveShadow castShadow>
          <primitive
            object={base.scene}
            scale={6}
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
          />
        </mesh>
      </group>
    </>
  );
};

export default Radio;




// useEffect(() => {
//   const onMouseMove = event => {
//     const camx = 0
//     const camy = 5.3
//     let changex = event.clientX - camx;
//     let changey = event.clientY - camy;

//       modelRef.current.rotation.y = (camx + changex / -300);
//       modelRef.current.rotation.y = (camy - changey / 300);
//   };


//     window.addEventListener('mousemove', onMouseMove);


//   return () => {
//     window.removeEventListener('mousemove', onMouseMove);
//   };
// }, []);