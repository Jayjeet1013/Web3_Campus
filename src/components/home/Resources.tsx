import React from 'react'
import { PinContainer } from "../ui/3d-pin";
import Link from 'next/link';
import { BiRightArrow } from 'react-icons/bi';

const Resources = () => {

        const data =[
                {
                        id:1,
                        topic:'Learn',
                        link:'/learn'
                },
                {
                        id:2,
                        topic:'Earn',
                        link:'/earn'
                },
                {
                        id:3,
                        topic:'Explore',
                        link:'/explore'
                },
        ]

  return (
    <div className='mx-auto py-12 max-w-6xl px-4 '>
        <h1 className='text-center text-[32px] pb-10 '>Start to Learn, Earn and Explore Web3</h1>
        <div className='flex items-center justify-between '>
        {data.map((item)=>(
                <div key={item.id} className='w-[300px] '>

         <PinContainer
        title={item.topic}
        href={item.link}
      > <Link href={item.link}>
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs flex gap-3 items-center !pb-2 !m-0 font-bold text-[20px]  text-slate-100">
           {item.topic} <BiRightArrow/>
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>  </Link>
      </PinContainer>
    
      </div> 
        ))}
        
       </div>
    </div>
  )
}

export default Resources