import { motion, useMotionValue, useTransform } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const FloatingParticles = () => {
  const ref = useRef();
  const [particles] = useState(() => {
    const generated = random.inSphere(new Float32Array(150 * 3), { radius: 1 });
    return generated.some((val) => isNaN(val))
      ? new Float32Array(150 * 3)
      : generated;
  });

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta / 10;
    ref.current.rotation.y += delta / 15;
  });

  return (
    <Points ref={ref} positions={particles} stride={3}>
      <PointMaterial
        transparent
        size={0.02}
        color="#888"
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

const BentoGridItem = ({ title, description, colSpan, rowSpan, className }) => {
  return (
    <motion.div
      className={`relative group rounded-2xl p-8 border border-white/10 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden ${className}`}
      style={{
        gridColumn: `span ${colSpan} / span ${colSpan}`,
        gridRow: `span ${rowSpan} / span ${rowSpan}`,
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(255, 255, 255, 0.05)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(at_top_right,_#ffffff10_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />

      <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
        {title}
      </h3>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>

      {Math.random() > 0.5 && (
        <div className="absolute inset-0 pointer-events-none">
          <Canvas>
            <FloatingParticles />
          </Canvas>
        </div>
      )}
    </motion.div>
  );
};

const BentoGrid = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [0, window.innerHeight], [10, -10]);
  const rotateY = useTransform(mouseX, [0, window.innerWidth], [-10, 10]);
  return (
    <motion.div
      className="grid grid-cols-3 grid-rows-3 gap-6 p-12 max-w-6xl mx-auto"
      style={{
        perspective: 1000,
        rotateX,
        rotateY,
      }}
      onMouseMove={(e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }}
    >
      <BentoGridItem
        colSpan={2}
        rowSpan={1}
        title="Digital Architectures"
        description="Crafting scalable solutions with modern tech stacks and cloud-native principles."
        className="bg-gradient-to-tr from-purple-900/30 to-pink-900/30"
      />

      <BentoGridItem
        colSpan={1}
        rowSpan={2}
        title="UI Alchemy"
        description="Transforming ideas into pixel-perfect experiences through design-system thinking."
        className="bg-gradient-to-br from-gray-800 to-purple-900/30"
      />

      <BentoGridItem
        colSpan={1}
        rowSpan={1}
        title="Code Poetry"
        description="Writing clean, maintainable code that tells its own story of efficiency."
        className="bg-gradient-to-tl from-pink-900/30 to-purple-900/30"
      />

      <BentoGridItem
        colSpan={1}
        rowSpan={1}
        title="Performance Art"
        description="Optimizing experiences to their maximum potential through meticulous tuning."
        className="bg-gradient-to-bl from-gray-800 to-pink-900/30"
      />

      <BentoGridItem
        colSpan={2}
        rowSpan={2}
        title="Full-Stack Vision"
        description="Bridging frontend elegance with backend robustness in complete solutions."
        className="bg-gradient-to-br from-purple-900/30 to-pink-900/30"
      />
    </motion.div>
  );
};

export default BentoGrid;
