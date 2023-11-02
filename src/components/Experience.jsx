// import { Environment, Sky, ContactShadows } from "@react-three/drei";
// import { useControls } from "leva";
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
  // const { animation } = useControls({
  //   animation: {
  //     value: "Typing",
  //     options: ["Typing", "Falling", "Standing"],
  //   },
  // });

  // return (
  //   <>
  //          {/* <OrbitControls /> */}
  //     <Room position-y={-1.00} />
  //     <Sky />
  //     <Environment preset="sunset" />
  //     <group position-y={-1}>
  //       <ContactShadows
  //         opacity={0.42}
  //         scale={10}
  //         blur={1}
  //         far={10}
  //         resolution={256}
  //         color="#000000"
  //       />
  //       <Avatar  scale={1.10} position-x={0.70} position-y={0.15} position-z={-0.55} rotation-y={1.50} animation={animation} />
  //       {animation === "Typing" && (
  //         // Box where avatar is typing
  //         <mesh scale={[0.8, 0.5, 0.8]} position-y={0.25}>
  //           {/* <boxGeometry /> */}
  //           <meshStandardMaterial color="#fff" />
  //         </mesh>
  //       )}

  //       <mesh scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
  //         {/* <planeGeometry /> */}
  //         <meshStandardMaterial color="#fff" />
  //       </mesh>
  //     </group>
  //   </>
  // );

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
        <Room  position-y={-1.50} />
      </motion.group>
    </>
  );
};
