import { Environment, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Cube from "../components/Cube";
import Loader from "../components/Loader";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Pyramid from "../components/Pyramid";
import Target from "../components/Target";
import Specs from "../components/Specs";
import Button from "../components/Button";
import { ArrowBigDown, MoveDown, Send } from "lucide-react";
import grainImage from "/assets/images/grain.jpg";
import StarIcon from "../components/StarIcon";
import HeroOrbit from "../components/HeroOrbit";
import Sparkle from "../components/Sparkle";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  //   const x = useControls({
  //     name: "Cube",
  //     positionX: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10,
  //     },
  //     positionY: {
  //       value: 2.5,
  //       min: -20,
  //       max: 10,
  //     },
  //     positionZ: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10,
  //     },
  //     rotationX: {
  //       value: 0,
  //       min: -10,
  //       max: 10,
  //     },
  //     rotationY: {
  //       value: 0,
  //       min: -10,
  //       max: 10,
  //     },
  //     rotationZ: {
  //       value: 0,
  //       min: -10,
  //       max: 10,
  //     },
  //     scale: {
  //       value: 1,
  //       min: 0.1,
  //       max: 10,
  //     },
  //   });

  return (
    <>
      {/* py-32 md:py-48 lg:py-60 */}
      <section className="min-h-screen w-full flex flex-col relative z-0 overflow-x-clip bg-black justify-center md:justify-normal">
        <div
          className="absolute inset-0 -z-30 opacity-5 blur-lg"
          style={{
            backgroundImage: `url(${grainImage})`,
          }}
        />
        {/* <div className="bg-gradient-to-r from-black/30 to-black/90 absolute w-full bottom-0 h-5 blur-2xl" /> */}
        <div className="hero-ring size-[620px]" />
        {/* <div className="hero-ring size-[820px]" />
          <div className="hero-ring size-[1020px]" /> */}

        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <Sparkle className="size-8 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="3s"
        >
          <Sparkle className="size-5 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="3s"
        >
          <Sparkle className="size-10 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="40s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="42s"
          shouldSpin
          spinDuration="3s"
        >
          <Sparkle className="size-14 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="44s">
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="46s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>

        <div className="container w-full mx-auto flex flex-col items-center sm:mt-36 mt-20 c-space gap-3">
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium text-white">
              Available for work
            </div>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <h1 className="font-generalsans text-3xl md:text-5xl text-center mt-8 tracking-wide text-white">
            Turning Ideas into Elegant Solutions
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming designs intuitive, efficient, and
            scalable web applications.Let's discusss your next project
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center mt-8 items-center gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl text-white">
            <span className="font-semibold">Explore my work</span>
            <MoveDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span className="font-semibold">Let's connect</span>
            <Send />
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
