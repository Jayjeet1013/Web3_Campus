import Link from "next/link";

export default function Footer() {
  const linkStyle = "p text-gray-400";
  return (
    <div className="bg-[#000]">
    <div className=" mx-auto max-w-7xl px-4  pb-8 pt-16">
      <div className="container mx-auto p flex justify-between">
        <div className="flex md:flex-row flex-wrap justify-between ">
          <div className="mb-5 w-1/3 sm:mb-0">
            <h3 className="h3 mb-3 text-white">Web3Campus</h3>
            <p className=" text-gray-400">
              Unleashing the Power of Web3 Education Welcome to Web3Campus, your
              gateway to mastering the intricacies of Web3 technology! At
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

          <div className="text-left sm:text-right">
            <h4 className="h4 text-white">Learn</h4>
            <div>
              <p className={linkStyle}>
                <Link href="/">Platforms</Link>
              </p>
              <p className={linkStyle}>
                <Link href="/">Youtubes</Link>
              </p>
              <p className={linkStyle}>
                <Link href="/learn">Tech</Link>
              </p>
              <p className={linkStyle}>
                <Link href="/explore/projects">Courses</Link>
              </p>
            </div>
          </div>

          <div className="text-left sm:text-right">
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

          <div className="text-left sm:text-right text-white">
            <h4 className="h4">Explore</h4>
            <div>
              <p className={linkStyle}>
                <Link href="/explore/Documentary">Documentaries</Link>
              </p>
              <p className={linkStyle}>
                <Link href="/explore/Whitepaper" >Whitepapers</Link>
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
      <div className="flex item-center justify-between p-3  mt-12 border-t-2 border-gray-900 flex-wrap">
        <p className="text-gray-400 w-full sm:w-[50%]">
          ✨ The blockchain is going to change everything more than the internet
          has.
        </p>
      </div>
    </div></div>
  );
}
