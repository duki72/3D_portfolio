import React from 'react'
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";

import sakura from "../assets/sakura.mp3";
import { HomeInfo, Loader } from "../components";
import { soundoff, soundon } from "../assets/icons";
import { Bird, Island, Plane, Sky } from "../models";


const Home = () => {

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition, rotation;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
      rotation = [0.1,4.7,0];
      
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition, rotation];

    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  };


  return (
    <section w-full h-screen relative>
      <Canvas className="w-full h-screen bg-transparent" camera={{near: 0.1, far: 1000}}> 
          <Suspense fallback={<Loader/>}>
            <directionalLight position={[1,1,1]} intensity={2}/>
            <ambientLight intensity={0.5}/>
           
            <hemisphereLight intensity={1}/>
            <Sky/>
            <Island 
              position={islandPosition}
              scale={islandScale}
              rotation={islandRotation}
            />

          </Suspense>
      </Canvas>
         
    </section>
  )
}

export default Home