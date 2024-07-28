import Link from "next/link";

import { BackgroundBeams } from "../ui/background-beams";
import { SparklesCore } from "../ui/sparkles";
import { BsLinkedin } from "react-icons/bs";

export default function Footer() {
  const linkStyle = "p text-gray-400";
  return (
    <div className="bg-[#000]">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="w-full md:h-[420px] h-[600px] lg:h-96 absolute "
        particleColor="#FFFFFF"
      />
      <div className=" mx-auto max-w-7xl px-4 relative pb-8 pt-16">
        <div className=" px-4 mx-auto p flex justify-between">
          <div className="flex lg:flex-row flex-col justify-between md:gap-20 ">
            <div className="mb-5 lg:w-1/3 sm:mb-0">
              <h3 className="h3 mb-3 text-white">Web3Campus</h3>
              <p className=" text-gray-400">
                Unleashing the Power of Web3 Education Welcome to Web3Campus,
                your gateway to mastering the intricacies of Web3 technology! At
                Web3Campus, we are passionate about empowering individuals with
                the knowledge and skills needed to thrive in the decentralized
                future.
              </p>
              <div>
                <div className="flex">
                  <Link
                    href="/"
                    rel="noreferrer"
                    className="text-3xl mr-3 mt-2 text-gray-500"
                  ></Link>
                  <Link
                    href="/"
                    rel="noreferrer"
                    className="text-3xl mr-3 mt-2 text-gray-500"
                  ></Link>
                  <Link
                    href="/"
                    rel="noreferrer"
                    className="text-3xl mr-3 mt-2 text-gray-500"
                  ></Link>
                  <Link
                    href="/"
                    rel="noreferrer"
                    className="text-3xl mr-3 mt-2 text-gray-500"
                  ></Link>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row gap-6 md:gap-32 md:flex-nowrap flex-wrap  justify-between ">
              <div className="">
                <h4 className="h4 text-white">Learn</h4>
                <div>
                  <p className={linkStyle}>
                    <Link href="/learn/#platforms">Platforms</Link>
                  </p>
                  <p className={linkStyle}>
                    <Link href="/learn/#youtube">You_Channels</Link>
                  </p>
                  <p className={linkStyle}>
                    <Link href="/learn/#tech">Tech</Link>
                  </p>
                  <p className={linkStyle}>
                    <Link href="/learn/#games">GamesPlatform</Link>
                  </p>
                </div>
              </div>

              <div className="">
                <h4 className="h4 text-white">Earn</h4>
                <div>
                  <p className={linkStyle}>
                    <Link href="/earn/Jobs">Jobs</Link>
                  </p>
                  <p className={linkStyle}>
                    <Link href="/earn/hackathons">Hackathons</Link>
                  </p>
                </div>
              </div>

              <div className=" text-white">
                <h4 className="h4">Explore</h4>
                <div>
                  <p className={linkStyle}>
                    <Link href="/explore/Documentary">Documentaries</Link>
                  </p>
                  <p className={linkStyle}>
                    <Link href="/explore/Whitepaper">Whitepapers</Link>
                  </p>
                  <p className={linkStyle}>
                    <Link href="/explore/projects">Projects</Link>
                  </p>
                  <p className={linkStyle}>
                    <Link href="/explore/glossary">Web3-Glossary</Link>
                  </p>
                  {/* <p className={linkStyle}>
                <Link href="/resources/consensus">Consensus Algorithms</Link>
              </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-gray-400 flex md:flex-row flex-col gap-4 item-center justify-between p-3  mt-12 border-t-2 border-gray-900 ">
         
          {/* <Link
            target="_blank"
            className="mr-20 flex gap-1 items-center "
            href={"https://www.linkedin.com/in/jayjeet-kumar-71a7751ba/"}
          >
            <p className="text-[18px] " >@ Made By ✨ <span className="font-bold opacity-85 text-white "> Jayjeet</span> </p>
            <BsLinkedin color="white " className="opacity-85 " />
          </Link> */}
          <p>Start Your Journey with Web3Campus</p>
        </div>
      </div>
    </div>
  );
}
