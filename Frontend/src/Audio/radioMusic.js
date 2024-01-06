import ScrollNavigation from "@/Utils/ScrollNavigation";
import { PositionalAudio } from "@react-three/drei";
import { useEffect, useRef } from "react";

const RadioMusic = ({radioOnOff}) => {
  const sound = useRef();
  const [audioVol] = ScrollNavigation();

  useEffect(() => {
    sound.current.setVolume(audioVol);
  }, [audioVol]);
  useEffect(() => {
    sound.current.setLoop(true)
    sound.current.setVolume(.6);
    {radioOnOff ? sound.current.play() : sound.current.pause()}
  
  }, [radioOnOff])
  

  return (
    <group position={[0, 0, 0]}>
      <PositionalAudio ref={sound} url="/song1.mp3" offset={0}  />
    </group>
  );
};

export default RadioMusic;
