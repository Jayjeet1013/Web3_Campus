import Link from "next/link";
import React from "react";
import { SparklesCore } from "../ui/sparkles";

export default function EarnHeader() {
  return (
    <div className="bg-black text-white pt-12 md:pt-28  md:pb-24 ">
      <div className="section text-center">
        <div className="md:max-w-[60%] flex flex-col items-center mx-auto">
          <h1 className="heading  ">Earn</h1>
          <p>You can earn through Participating in Hackathons and Got a job.</p>

          <div className="w-full md:w-[40rem] h-20 md:h-40 flex items-center justify-center relative">
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

          <div className="flex gap-4 pt-4 items-center text-center justify-center ">
            <Link href={"/earn/hackathons"}>
              <button className="border rounded-md p-2 bg-green-400 text-black ">
                Hackathons
              </button>
            </Link>
            <Link href={"/earn/Jobs"}>
              <button className="border rounded-md px-8 py-2 bg-green-400 text-black ">
                Jobs
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
