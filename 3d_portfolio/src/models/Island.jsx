//a => animations
import { a } from "@react-spring/three";
import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import islandScene from "../assets/3d/island.glb";

export const Island = (props ) => {
  
 
    const islandRef = useRef();
    // Get access to the Three.js renderer and viewport
    const {gl, viewport} = useThree();
    const { nodes, materials } = useGLTF(islandScene);

      // Use a ref for the last mouse x position
     const lastX = useRef(0);
     // Use a ref for rotation speed
    const rotationSpeed = useRef(0);

    return (
        
        <a.group ref={islandRef} {...props}>
          <mesh
            geometry={nodes.polySurface944_tree_body_0.geometry}
            material={materials.PaletteMaterial001}
          />
          <mesh
            geometry={nodes.polySurface945_tree1_0.geometry}
            material={materials.PaletteMaterial001}
          />
          <mesh
            geometry={nodes.polySurface946_tree2_0.geometry}
            material={materials.PaletteMaterial001}
          />
          <mesh
            geometry={nodes.polySurface947_tree1_0.geometry}
            material={materials.PaletteMaterial001}
          />
          <mesh
            geometry={nodes.polySurface948_tree_body_0.geometry}
            material={materials.PaletteMaterial001}
          />
          <mesh
            geometry={nodes.polySurface949_tree_body_0.geometry}
            material={materials.PaletteMaterial001}
          />
          <mesh
            geometry={nodes.pCube11_rocks1_0.geometry}
            material={materials.PaletteMaterial001}
          />
        </a.group>
      );

}