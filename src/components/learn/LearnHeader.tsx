import React from "react";
import LearnByGame from "./LearnByGame";
import Platforms from "./Platforms";
import LearnByYoutube from "./LearnByYoutube";
import { SparklesCore } from "../ui/sparkles";

export default function LearnHeader() {
  return (
    <div className="bg-black text-white  pt-48">
      <div className=" text-center">
        <div className="md:max-w-[60%] flex flex-col items-center  pb-28 mx-auto">
          <h1 className="text-[30px] md:text-[70px] font-bold  ">
            🧑‍💻
            <br />
            Learn
          </h1>
          <p className="text-[24px] ">Learn by using these techs</p>
          <div className="w-full md:w-[40rem] h-20 md:h-40  flex items-center justify-center relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />

            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
