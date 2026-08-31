import { Environment } from "@react-three/drei";

export default function WorldEnvironment() {
  return (
    <Environment
      files={`${import.meta.env.BASE_URL}hdr/night_clouds.hdr`}
      background
      environmentIntensity={-0.50}
      backgroundIntensity={-0.10}
    />
  );
}