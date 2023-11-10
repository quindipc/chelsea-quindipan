// import { Environment, Sky, ContactShadows } from "@react-three/drei";
import { useControls } from "leva";
import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect } from "react";
import { framerMotionConfig } from "../config";
import { Avatar } from "./Avatar";
import { Room } from "./Room";

export const Experience = (props) => {
  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Typing", "Falling", "Standing"],
    },
  });

  const { section } = props;
  return (
    <>
      <ambientLight intensity={1} />
      <motion.group
        position={[2, 2, 2.5]}
        scale={[.8, .8, .8]}
        rotation-y={-Math.PI / 5}
        animate={{
          y: section === 0 ? 0 : -1,
        }} 
      >
        <Room position-y={-1.50} section={section} />
      </motion.group>

      {/* OLD CODE FOR AVATAR */}
      <group position-y={-1}>
        <Avatar  scale={1.10} position-x={2.8} position-y={-.31} position-z={2.5} rotation-y={7} animation={animation} />
        {animation === "Typing" && (
          <mesh scale={[0.8, 0.5, 0.8]} position-y={3}>
            <meshStandardMaterial color="#fff" />
          </mesh>
        )}
        {/* <mesh scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
          <meshStandardMaterial color="#fff" />
        </mesh> */}
      </group>
    </>
  );
};
