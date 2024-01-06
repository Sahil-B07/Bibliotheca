import {useGLTF } from "@react-three/drei"


const Shadow = (url)=>{

  let model  = useGLTF(url)

model.scene.traverse((child) => {
  if (child.isMesh) {
    child.castShadow =true
    child.receiveShadow=true 
  }
});

return model
}

export default Shadow