/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 public/models/Room.gltf 
*/
import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useGLTF, useTexture, } from '@react-three/drei'
import {useMotionValue, motion} from "framer-motion";
import { useFrame } from '@react-three/fiber';

export function Room(props) {
  const {section} = props;
  const { nodes, materials } = useGLTF('models/Room.gltf')
  const texture = useTexture('textures/baked.jpg')
  texture.flipY = false;
  texture.encoding = THREE.sRGBEncoding;
  
  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    opacity: 1,
  })

  const textureGlassMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    opacity: 0.42,
  });
  
  const textureOpacity = useMotionValue(0);
  const glassTextureOpacity = useMotionValue(0);

  // useEffect(() => {
  //   animate(textureOpacity, section === 0 ? 1 : 0);
  //   animate(glassTextureOpacity, section === 0 ? 0.42 : 0);
  // }, [section]);

  // useFrame(() => {
  //   textureMaterial.opacity = textureOpacity.get();
  //   textureGlassMaterial.opacity = glassTextureOpacity.get();
  // });

  return (
    <group {...props} dispose={null}>
      <group position={[-0.074, 0, -1.521]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_Plane002_BlackWood001.geometry}
          material={materials["BlackWood.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_Plane002_BlackWood001_1.geometry}
          material={materials["BlackCoatSteel.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_Plane002_BlackWood001_2.geometry}
          material={materials["GrayPlastic.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_Plane002_BlackWood001_3.geometry}
          material={materials["WhiteSteelScrew.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_Plane002_BlackWood001_4.geometry}
          material={materials["BlackPlastic.001"]}
        />
      </group>
      <group position={[-0.044, 0.981, -1.346]} rotation={[0, -0.165, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh425587018.geometry}
          material={materials["mat21.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh425587018_1.geometry}
          material={materials["mat22.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh425587018_2.geometry}
          material={materials["mat9.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh425587018_3.geometry}
          material={materials["mat16.001"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Comp_Mouse.geometry}
        material={materials["lambert3SG.003"]}
      />
      <group position={[-0.78, 1.071, -1.61]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh24448074.geometry}
          material={materials["mat9.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh24448074_1.geometry}
          material={materials["mat20.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh24448074_2.geometry}
          material={materials["mat21.005"]}
        />
      </group>
      <group
        position={[-2.019, -0.042, -1.526]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.329}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Houseplant_7_1.geometry}
          material={materials["Black.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Houseplant_7_2.geometry}
          material={materials["Brown.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Houseplant_7_3.geometry}
          material={materials["Plant_Green.001"]}
        />
      </group>
      <group position={[-0.278, 0, -0.708]} rotation={[0, -0.376, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Node-Mesh"].geometry}
          material={materials.Office_Cha}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Node-Mesh_1"].geometry}
          material={materials.Office_Cha_1}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curtains.geometry}
        material={materials.Mat}
        position={[-2.659, -0.023, 0.015]}
        rotation={[-2.047, -1.555, -2.049]}
        scale={0.031}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Monitor.geometry}
        material={materials.lambert3SG}
        position={[0.084, 0.989, -1.707]}
        rotation={[-0.037, -0.141, 0.007]}
        scale={0.002}
      />
      <group
        position={[-0.024, 2.311, -2.17]}
        rotation={[3.136, -0.007, -1.552]}
        scale={2.303}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Node-Mesh002"].geometry}
          material={materials["mat23.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Node-Mesh002_1"].geometry}
          material={materials["mat21.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Node-Mesh002_2"].geometry}
          material={materials.mat7}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Node-Mesh002_3"].geometry}
          material={materials.mat6}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Node-Mesh002_4"].geometry}
          material={materials["mat17.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Node-Mesh002_5"].geometry}
          material={materials["mat24.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Node-Mesh002_6"].geometry}
          material={materials.mat25}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials.Floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_1.geometry}
        material={materials.White}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_2.geometry}
        material={materials.Wall}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_3.geometry}
        material={materials.Glass}
      />
    </group>
  )
}

useGLTF.preload('models/Room.gltf')
