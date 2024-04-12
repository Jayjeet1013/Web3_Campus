import React from 'react'
import { PlatformsData } from '@/data/Platforms'
import Link from 'next/link'

const Platforms = () => {
  return (
    <div className='pt-7 '>


 <h1>Web3 Learning Platforms</h1>
 <div className='flex gap-4 flex-wrap  items-center justify-center pt-4 '>
       
        {PlatformsData.map((data)=>(
           <div key={data.id} >
                <Link href={data.Link} target='_blank'>
                        <div className='border bg-slate-400 p-6 w-[300px] rounded-lg '>
            <div>{data.Name}</div>
            <div>{data.Description}</div>
            </div>
            </Link>
           </div>
        ))}
</div>
    </div>
  )
}

export default Platforms