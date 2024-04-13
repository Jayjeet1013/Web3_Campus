import React from 'react'
import { YoutubeData } from '@/data/youtubedata' 
import Link from 'next/link'

const LearnByYoutube = () => {
  return (
    <div id='youtube' className='pt-7 '>

<div className="text-center p-4 bg-[#000]">
        <h3 className="h3 text-white">Learn By Watching Videos</h3>
      </div>
 
 <div  className='flex gap-4 flex-wrap  items-center justify-center pt-4 '>
       
        {YoutubeData.map((data)=>(
           <div key={data.id} className=' '>
                <Link href={data.link} target='_blank'>
                        <div className='border bg-slate-400 p-6 h-[160px]  w-[300px] rounded-lg '>
            <div>{data.title}</div>
            <div>{data.description}</div>
            </div>
            </Link>
           </div>
        ))}
</div>
    </div>
  )
}

export default LearnByYoutube