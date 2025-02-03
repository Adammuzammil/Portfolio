import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import {
  Environment,
  Loader,
  OrbitControls,
  Plane,
  useGLTF,
} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Model() {
  const gltf = useLoader(
    GLTFLoader,
    "https://models.readyplayer.me/67a0bfa6f7483b9129d5375c.glb"
  );

  gltf.scene.rotation.y = Math.PI / 4;
  gltf.scene.position.set(0, -3.5, 0);
  gltf.scene.scale.set(3.5, 3.5, 3.5);

  // Enable shadows for the model
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  return (
    <>
      <primitive object={gltf.scene} />
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <Environment preset="sunset" />
      <OrbitControls enableZoom={false} />
    </>
  );
}

function ThreeModel() {
  return (
    <div className="h-screen">
      <Canvas
        camera={{
          position: [5, 2, 8],
          fov: 50,
          near: 0.1,
          far: 1000,
        }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default ThreeModel;
