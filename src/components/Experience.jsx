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

  const cameraPositionX = useMotionValue(0);
  const cameraLookAtX = useMotionValue(0);

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

  return (
    <>
      <ambientLight intensity={1} />
      <motion.group
        //  position={[1.5, 2, 3]}
        //  scale={[0.9, 0.9, 0.9]}
        animate={{
          y: section === 1 ? 0 : -8,
        }}
        position-x={0.8}
        position-z={0.5}
        rotation-y={-Math.PI / 4}
          // rotation-y={5.3}
          rotation-x={4.7}
          scale={[.8,.8,.8]}
      >
        {/* <Room section={section} /> */}
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
          <mesh scale={[1, 1, 1]} position-y={-18} position-x={5}>
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
          <mesh scale={[2, 2, 2]} position-y={-18} position-x={2}>
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
        <group scale={[2, 2, 2]} position-y={-10} position-x={-1}>
          {/* <Avatar
            // rotation-x={5}
            position-z={1}
            position-x={1}
            rotation-x={-Math.PI / 1}
            animation={
              section === 0
                ? "Standing"
                : section === 1
                ? "Falling"
                : section === 2
                ? "Typing"
                : "Standing"
            }
          /> */}
        </group>
      </motion.group>
    </>
  );
};
