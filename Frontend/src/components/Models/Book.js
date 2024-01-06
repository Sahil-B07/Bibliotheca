import React from "react";
import { useFrame } from "@react-three/fiber";
import StoreShade from "../../Utils/Shadow";
import Scene from "../Canvas";

const Book = (props) => {
  return (
    <Scene
      height={"60vh"}
      width={"45vh"}
      color={"white"}
      camPos={[0, 9.3, 23]}
      target={[0, 1.5, 0]}
      fov={30}
      DlightPos={[4, 2, 1]}
      Dintensity={4}
    >
      <StoreModel />
    </Scene>
  );
};

const StoreModel = () => {
  let model = StoreShade("/ModelFiles/books/VintageBook.glb");

  const modelRef = React.useRef();
  var delta = 0;
  useFrame((state) => {
    delta += 0.01;
    if (modelRef.current) {
      modelRef.current.rotation.y = -delta;
    }
  });

  return (
    <>
      <group ref={modelRef} position={[0, 0, 0]}>
        {/* Store */}
        <mesh castShadow>
          <primitive
            object={model.scene}
            scale={8}
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
          />
        </mesh>
      </group>
    </>
  );
};

export default Book;
