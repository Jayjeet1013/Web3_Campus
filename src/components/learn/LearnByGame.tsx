import React from 'react'
import { LearnByGameData } from '@/data/learnByGame'
import Link from 'next/link'

const LearnByGame = () => {
  return (
    <div className='pt-7 '>


 <h1>Learn While You Play</h1>
 <div className='flex gap-4 md:flex-row flex-col items-center justify-center pt-4 '>
       
        {LearnByGameData.map((data)=>(
           <div key={data.id} >
                <Link href={data.link} target='_blank'>
                        <div className='border bg-slate-400 p-6 w-[300px] rounded-lg '>
            <div>{data.name}</div>
            <div>{data.description}</div>
            </div>
            </Link>
           </div>
        ))}
</div>
    </div>
  )
}

export default LearnByGame