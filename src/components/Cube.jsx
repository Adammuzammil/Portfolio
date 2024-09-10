import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Cube = (props) => {
  const { nodes, materials } = useGLTF("/models/one_line_cube.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[12.951, 4.179, -2.407]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-0.996, 0.996, 11.801]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.Material}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/models/one_line_cube.glb");

export default Cube;
