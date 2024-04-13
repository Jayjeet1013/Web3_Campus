import Link from 'next/link'
import React from 'react'

const ExploreHeader = () => {
  return (
    <div>

 
    <div className="bg-[#E7FFFF] pt-12 md:pt-28  md:pb-24 ">
      <div className="section text-center">
        <div className="md:max-w-[60%] mx-auto">
          <h1 className="heading  ">
           Explore
          </h1>
          <p>
            Explore other Resouces of Web3.0
          </p>

          <div className="flex gap-4 pt-6 items-center text-center justify-center ">
            <Link href={'/explore/Documentary'}>
              <button className="border rounded-md p-2 bg-green-400 text-black ">Documentaries</button>
            </Link>
            <Link href={'/explore/glossary'}>
              <button className="border rounded-md px-8 py-2 bg-green-400 text-black ">Web3-Glossary</button>
            </Link>
            <Link href={'/explore/projects'}>
              <button className="border rounded-md px-8 py-2 bg-green-400 text-black ">Projects</button>
            </Link>
            <Link href={'/explore/Whitepaper'}>
              <button className="border rounded-md px-8 py-2 bg-green-400 text-black ">WhitePapers</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
</div>
  )
}

export default ExploreHeader