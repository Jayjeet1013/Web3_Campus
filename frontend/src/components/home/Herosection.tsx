import Link from 'next/link'
import React from 'react'

const Herosection = () => {
  return (
    <div>
      <div className='flex flex-col gap-5 my-20 items-center justify-center '>
        <div className='flex gap-10'>
          <div className='w-[50%] '>
          Gain More KnowledgeBy Reading Whitepapers
          <Link href={'/'} >
            <div className='bg-black text-white w-[140px] rounded-xl py-3 text-center '> Read Now</div>
           
            </Link>
            </div>
            <div className='w-[50%] '>
            Learn about Metaverse, NFTs, Blockchain, Web3 and much more...
          <Link href={'/'} >
            <div className='bg-black text-white w-[140px] rounded-xl py-3 text-center '> Read Now</div>
           
            </Link>
            </div>
        </div>
        <div className='flex gap-10'>
          <div className='w-[50%] '>
          We have prepared a list of 100+ Blockchain projects, that you can Build right now
          <Link href={'/'} >
            <div className='bg-black text-white w-[140px] rounded-xl py-3 text-center '> Read Now</div>
           
            </Link>
            </div>
            <div className='w-[50%] '>
            Browse blockchain jobs in web3
          <Link href={'/'} >
            <div className='bg-black text-white w-[140px] rounded-xl py-3 text-center '> Read Now</div>
           
            </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Herosection