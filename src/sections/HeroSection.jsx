// components/HeroSection.tsx
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { motion, useScroll, useTransform } from "framer-motion";

import { useMemo } from "react";
import { MeshStandardMaterial, SphereGeometry } from "three";

// Cloud Component
const Cloud = ({ position, scale }) => {
  const cloudGeo = useMemo(() => new SphereGeometry(1, 16, 16), []);
  const cloudMat = useMemo(
    () =>
      new MeshStandardMaterial({
        color: "#a0a0ff",
        transparent: true,
        opacity: 0.15,
        roughness: 0.8,
        metalness: 0.1,
      }),
    []
  );

  useFrame(({ clock }) => {
    cloudMat.opacity = 0.15 + Math.sin(clock.elapsedTime) * 0.05;
  });

  return (
    <mesh
      geometry={cloudGeo}
      material={cloudMat}
      position={position}
      scale={scale}
    />
  );
};

const ParticleSystem = ({ mouse }) => {
  const ref = useRef();
  const [cloudPositions] = useState(() =>
    Array.from({ length: 10 }, () => [
      Math.random() * 4 - 2,
      Math.random() * 2 - 1,
      Math.random() * -3 - 2,
    ])
  );

  const [cloudScales] = useState(() =>
    Array.from({ length: 10 }, () => [
      Math.random() * 0.4 + 0.2,
      Math.random() * 0.4 + 0.2,
      Math.random() * 0.4 + 0.2,
    ])
  );

  useFrame((state, delta) => {
    // Existing particle animation
    if (ref.current) {
      ref.current.rotation.y += delta / 20;
      ref.current.rotation.x += delta / 30;
      // Mouse interaction
      if (mouse[0] && mouse[1]) {
        ref.current.position.x += (mouse[0] - ref.current.position.x) * 0.01;
        ref.current.position.y += (-mouse[1] - ref.current.position.y) * 0.01;
      }
    }
  });
  const [particles] = useState(
    () =>
      new Float32Array(random.inSphere(new Float32Array(2000), { radius: 1.5 }))
  );

  //   useFrame((state, delta) => {
  //     if (!ref.current) return;
  //     ref.current.rotation.y += delta / 20;
  //     ref.current.rotation.x += delta / 30;

  //     // Mouse interaction
  //     if (mouse[0] && mouse[1]) {
  //       ref.current.position.x += (mouse[0] - ref.current.position.x) * 0.01;
  //       ref.current.position.y += (-mouse[1] - ref.current.position.y) * 0.01;
  //     }
  //   });

  return (
    <>
      <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#888"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </>
  );
};

export const HeroSection = () => {
  const [mouse, setMouse] = useState([0, 0]);

  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const getCurrentDayDateTime = () => {
    const now = new Date();
    return {
      day: now.toLocaleDateString("en-US", { weekday: "long" }),
      date: now.toLocaleDateString("en-US", { day: "2-digit", month: "short" }),
      time: now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
    };
  };

  const { day, date, time } = getCurrentDayDateTime();

  return (
    <motion.section
      className="sticky top-0 h-screen w-full bg-[#232126] flex items-center justify-center z-[-1]"
      style={{ scale, opacity }}
    >
      {/* 3D Canvas */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ParticleSystem mouse={mouse} />
        </Canvas>
      </div>

      {/* Content */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center z-10"
        onMouseMove={(e) => {
          const { clientX, clientY } = e;
          setMouse([
            (clientX / window.innerWidth) * 2 - 1,
            -(clientY / window.innerHeight) * 2 + 1,
          ]);
        }}
      >
        <div className="w-full flex flex-col items-center justify-center px-12">
          <h1 className="text-7xl md:text-[12vw] font-medium tracking-wide text-[#C4C5C9]">
            ADAM M
          </h1>
          <h3 className="text-base md:text-[1.5vw] tracking-[0.5em] text-white/50 my-2">
            FULL-STACK DEVELOPER
          </h3>
          <h1 className="text-7xl md:text-[12vw] font-medium tracking-wide  text-[#C4C5C9]">
            MUZAMMIL
          </h1>
        </div>

        <motion.div
          className="absolute bottom-8 left-0 right-0 px-4 sm:px-8 lg:px-16 text-blue-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 gap-4 sm:gap-0">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-blue-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium text-white/55">Mangalore, IN</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-3 w-3 bg-green-500 rounded-full animate-ping absolute" />
                <div className="h-3 w-3 bg-green-500 rounded-full relative" />
              </div>
              <span className="font-medium text-white/55">
                Available for opportunities
              </span>
            </div>

            <div className="flex items-center gap-2 text-white/55">
              <span className="font-medium">{day}</span>
              <span className="text-gray-400">•</span>
              <span>{date}</span>
              <span className="text-gray-400">•</span>
              <span className="font-mono">{time}</span>
            </div>
          </div>
        </motion.div>
        {/* Scrolling Indicator */}
        {/* <div className="absolute bottom-12 h-12 w-8 border-2 border-white rounded-2xl">
          <div className="animate-bounce w-1 h-2 bg-white rounded-full mx-auto mt-2" />
        </div> */}
      </div>
    </motion.section>
  );
};
