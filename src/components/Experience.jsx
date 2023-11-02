import { Environment, OrbitControls, Sky, ContactShadows } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { Room } from "./Room";
import { useControls } from "leva";

export const Experience = () => {
  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Typing", "Falling", "Standing"],
    },
  });

  return (
    <>
           <OrbitControls />
      <Room position-y={-1.00} />
      <Sky />
      <Environment preset="sunset" />
      <group position-y={-1}>
        <ContactShadows
          opacity={0.42}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />
        <Avatar  scale={1.10} position-x={0.70} position-y={0.15} position-z={-0.55} rotation-y={1.50} animation={animation} />
        {animation === "Typing" && (
          // Box where avatar is typing
          <mesh scale={[0.8, 0.5, 0.8]} position-y={0.25}>
            {/* <boxGeometry /> */}
            <meshStandardMaterial color="#fff" />
          </mesh>
        )}

        <mesh scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
          {/* <planeGeometry /> */}
          <meshStandardMaterial color="#fff" />
        </mesh>
      </group>
    </>
  );
};
