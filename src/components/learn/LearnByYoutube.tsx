import React from 'react'
import { YoutubeData } from '@/data/youtubedata' 
import Link from 'next/link'
import { BackgroundGradient } from "../ui/background-gradient";
import { FollowerPointerCard } from '../ui/followind-pointer'; 
 

const LearnByYoutube = () => {
  return (
    <div id='youtube' className='pt-7 '>

<div className="text-center p-4 bg-[#000]">
        <h3 className="h3 text-white">Learn By Watching Videos</h3>
      </div>
 
 <div  className='flex gap-4 flex-wrap mx-auto pb-20 max-w-7xl  items-center justify-center pt-20 '>
       
        {YoutubeData.map((data)=>(
          
           <div key={data.id} className=' '>
            <FollowerPointerCard
       
      >

      <BackgroundGradient className="rounded-[22px] max-w-sm  sm:p-10 bg-white dark:bg-zinc-900">
                <Link href={data.link} target='_blank'>
                        <div className='  h-[100px]  w-[300px] rounded-lg '>
                        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {data.title}
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
        {data.description}
        </p>

            </div>
            </Link>
            </BackgroundGradient>
            </FollowerPointerCard>
           </div>
        ))}
</div>
    </div>
  )
}

export default LearnByYoutube