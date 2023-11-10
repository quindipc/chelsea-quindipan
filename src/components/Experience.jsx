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
  const { section, menuOpened } = props;
  const { viewport } = useThree();

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX, menuOpened ? 5 : 0, {
      ...framerMotionConfig,
    });
  }, [menuOpened]);

  useFrame((state) => {
    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  });

  let animation;
switch (section) {
  case 0:
    animation = "Typing";
    break;
  case 1:
    animation = "Standing";
    break;
  default:
    animation = "Falling";
}
  return (
    <>
      <ambientLight intensity={1} />
      <motion.group
        position={[2, 2, 2.5]}
        scale={[0.8, 0.8, 0.8]}
        rotation-y={-Math.PI / 5}
        animate={{
          y: section === 0 ? 0 : -1,
        }}
      >
        <Room  section={section} />
      </motion.group>

      {/* SKILLS */}
      <motion.group
        position={[1, 1, 1]}
        animate={{
          z: section === 1 ? 0 : 0,
          y: section === 1 ? -viewport.height : -1,
        }}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
        <Float>
          <mesh scale={[1, 1, 1]} position-y={-18} position-x={4}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={0.4}
              speed={2}
              color={"#F06193"}
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[1, 1, 1]} position-y={-18}  position-x={5}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={1}
              speed={2}
              color={"#F8BCD3"}
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[2, 2, 2]} position-y={-18}  position-x={2}>
            <boxGeometry />
            <MeshWobbleMaterial
              opacity={0.8}
              transparent
              factor={1}
              speed={2}
              color={"#34344A"}
            />
          </mesh>
        </Float>
        <group scale={[2, 2, 2]} position-y={-10}>
          <Avatar
            rotation-x={5}
            position-z={1}
            position-x={1}
            animation={section === 0 ? "Typing" : "Standing" || "Falling"}
          />
        </group>
      </motion.group>
    </>
  );
};
