// import { Environment, Sky, ContactShadows } from "@react-three/drei";
// import { useControls } from "leva";
import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial, useScroll
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect, useRef, useState } from "react";
import { framerMotionConfig } from "../config";
import { Avatar } from "./Avatar";
import { Room } from "./Room";
// import { Background } from "./Background";

export const Experience = (props) => {
  const { menuOpened } = props;
  const { viewport } = useThree();
  const data = useScroll();

  const [section, setSection] = useState(0);

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

  const characterContainerAboutRef = useRef();

  const [characterAnimation, setCharacterAnimation] = useState("Waving");

  // useEffect(() => {
  //   setCharacterAnimation("Standing");
  //   setTimeout(() => {
  //     setCharacterAnimation(section === 0 ? "Waving" : "Standing");
  //   }, 200);
  // }, [section]);

  useEffect(() => {
    let animation = "Standing";
  
    if (section === 1) {
      animation = "Waving";
    } else if (section === 2) {
      animation = "Typing";
    }
  
    setCharacterAnimation(animation);
  }, [section, setCharacterAnimation]);
  

  useFrame((state) => {
    let curSection = Math.floor(data.scroll.current * data.pages);

    if (curSection > 3) {
      curSection = 3;
    }

    if (curSection !== section) {
      setSection(curSection);
    }

    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);

    // const position = new THREE.Vector3();
    // characterContainerAboutRef.current.getWorldPosition(position);
    // console.log([position.x, position.y, position.z]);

    // const quaternion = new THREE.Quaternion();
    // characterContainerAboutRef.current.getWorldQuaternion(quaternion);
    // const euler = new THREE.Euler();
    // euler.setFromQuaternion(quaternion, "XYZ");

    // console.log([euler.x, euler.y, euler.z]);
  });

  useFrame((state) => {
    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  });

  return (
    <>
      {/* <Background /> */}
      <ambientLight intensity={1} />
      <motion.group
        //  position={[1.5, 2, 3]}
        // animate={{
          //   y: section === 1 ? 0 : -8,
          // }}
          // rotation-y={-Math.PI / 4}
          // rotation-y={5.3}
          // rotation-x={-4.7}
          // scale={[0.8, 0.8, 0.8]}
          
          // position={[1, 2, 3]}
          scale={[0.9, 0.9, 0.9]}
        position-y={-5}
        position-x={1}
        position-z={1}
        rotation={[-6.1, 3.2, 3]}
        animate={"" + section}
        transition={{
          duration: 0.6,
        }}
        variants={{
          0: {
            scaleX:0.9,
            scaleY:0.9,
            scaleZ:0.9,
          },
          1: {
            y: -5,
            x: 1,
            z: 1,
            // rotateX: 0,
            // rotateY: 0,
            // rotateZ: 0,
          },
          2: {
            y: -5,
            x: 1,
            z: 1,
            // rotateX: 0,
            // rotateY: 0,
            // rotateZ: 0,
          },
          3: {
            y: -5,
            x: 1,
            z: 1,
            // rotateX: 0,
            // rotateY: 0,
            // rotateZ: 0,
          },
        }}
      >
           <Avatar animation={characterAnimation} />
        {/* <Room section={section} /> */}
      </motion.group>

      <motion.group
        position={[-1, 5, 5]}
        scale={[0.9, 0.9, 0.9]}
        // rotation-y={-Math.PI / 2}
        animate={{
          y: section === 0 ? 0 : -1,
        }}
      >
        {/* <Room section={section} /> */}
        <group
          ref={characterContainerAboutRef}
          name="CharacterSpot"
          position={[0.07, 0.16, -0.57]}
          rotation={[-Math.PI, 0.42, -Math.PI]}
        ></group>
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

        <group position-x={-5}>
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
        </group>

        <group position-x={2}>
          <Float>
            <mesh scale={[1, 1, 1]} position-y={-18} position-x={4}>
              <sphereGeometry />
              <MeshDistortMaterial
                opacity={0.8}
                transparent
                distort={1}
                speed={2}
                color={"#F06193"}
              />
            </mesh>
          </Float>
          <Float>
            <mesh scale={[1, 1, 1]} position-y={-18} position-x={3}>
              <sphereGeometry />
              <MeshDistortMaterial
                opacity={0.8}
                transparent
                distort={1.7}
                speed={1}
                color={"#F8BCD3"}
              />
            </mesh>
          </Float>
          <Float>
            <mesh scale={[3, 5, 2]} position-y={-18} position-x={1}>
              <boxGeometry />
              <MeshWobbleMaterial
                opacity={0.8}
                transparent
                factor={1}
                speed={1}
                color={"#34344A"}
              />
            </mesh>
          </Float>
        </group>
        {/* <group scale={[2, 2, 2]} position-y={-10} position-x={-1}> */}
          {/* <Avatar
            // rotation-x={5}
            position-z={1}
            position-x={1}
            rotation-x={-Math.PI / 1}
            // animation={
            //   section === 0
            //     ? "Standing"
            //     : section === 1
            //     ? "Falling"
            //     : section === 2
            //     ? "Typing"
            //     : "Standing"
            // }
            animation={
              section === 0
                ? "Waving"
                : section === 1
                ? "Entry"
                : section === 2
                ? "Standing"
                : "Standing"
            }
         />  */}
        {/* </group> */}
      </motion.group>
    </>
  );
};
