import Link from 'next/link'
import React from 'react'
import { SparklesCore } from '../ui/sparkles';

const ExploreHeader = () => {
  return (
    <div>
      <div className="bg-black text-white pt-12 md:pt-28  md:pb-24 ">
        <div className="section text-center">
          <div className="md:max-w-[60%] flex flex-col items-center justify-center mx-auto">
            <h1 className="heading  ">Explore</h1>
            <p>Explore other Resouces of Web3.0</p>

            <div className="w-[40rem] h-40 relative">
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

            <div className="flex md:flex-row flex-col gap-4 pt-6 items-center text-center justify-center ">
              <Link href={"/explore/Documentary"}>
                <button className="border rounded-md p-2 bg-green-400 text-black ">
                  Documentaries
                </button>
              </Link>
              <Link href={"/explore/glossary"}>
                <button className="border rounded-md px-8 py-2 bg-green-400 text-black ">
                  Web3-Glossary
                </button>
              </Link>
              <Link href={"/explore/projects"}>
                <button className="border rounded-md px-8 py-2 bg-green-400 text-black ">
                  Projects
                </button>
              </Link>
              <Link href={"/explore/Whitepaper"}>
                <button className="border rounded-md px-8 py-2 bg-green-400 text-black ">
                  WhitePapers
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreHeader