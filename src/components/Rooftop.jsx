import { useGLTF } from "@react-three/drei";

export default function Helipad() {
  const { scene } = useGLTF("/models/helipad.glb");

  return (
    <primitive
      object={scene}
      position={[0, -1.6, 0]}
      rotation={[0, 0, 0]}
      scale={1}
    />
  );
}

useGLTF.preload("/models/helipad.glb");