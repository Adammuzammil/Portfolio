import React, { useRef } from "react";
import { Float, useGLTF } from "@react-three/drei";

const Specs = (props) => {
  const { nodes, materials } = useGLTF("/models/eyeglasses_specs.glb");
  return (
    <Float floatIntensity={1}>
      <group
        {...props}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={0.5}
        dispose={null}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[0, -0.014, 0]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[0.39, 0.39, 0.5]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials.metalFrame}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_5.geometry}
              material={materials.metalFrame}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials.metalFrame}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_7.geometry}
              material={materials.lens}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_8.geometry}
              material={materials.earstick}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_9.geometry}
              material={materials.black}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_10.geometry}
              material={materials.brown}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_11.geometry}
              material={materials.white}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_12.geometry}
              material={materials.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_13.geometry}
              material={materials.rubberPeice}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_14.geometry}
              material={materials["Material.001"]}
            />
          </group>
        </group>
      </group>
    </Float>
  );
};

useGLTF.preload("/models/eyeglasses_specs.glb");

export default Specs;
