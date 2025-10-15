'use client';
import Shuffle from './animations/ShuffleText';
import LightRays from './backgrounds/LightRays';

export default function NotFound() {
  return (
    <div>
      <LightRays
        raysOrigin="top-center"
        raysColor="#00ffff"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="custom-rays w-full h-screen bg-fixed"
      />
      <div className="flex flex-col justify-center items-center h-screen absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
        <Shuffle
          text="404"
          shuffleDirection="right"
          duration={0.35}
          animationMode="evenodd"
          shuffleTimes={1}
          ease="power3.out"
          stagger={0.03}
          threshold={0.1}
          triggerOnce={true}
          triggerOnHover={true}
          respectReducedMotion={true}
          loop
          loopDelay={2}
          className="text-7xl font-extrabold text-center"
        />
        <Shuffle
          text="Page Not Found"
          shuffleDirection="right"
          duration={0.35}
          animationMode="evenodd"
          shuffleTimes={1}
          ease="power3.out"
          stagger={0.03}
          threshold={0.1}
          triggerOnce={true}
          triggerOnHover={true}
          respectReducedMotion={true}
          loop
          loopDelay={2}
          className="text-7xl font-extrabold text-center"
        />
      </div>
    </div>
  );
}
