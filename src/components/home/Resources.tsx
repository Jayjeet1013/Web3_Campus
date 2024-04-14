import React from 'react'
import { PinContainer } from "../ui/3d-pin";
import Link from 'next/link';
import { BiRightArrow } from 'react-icons/bi';
import { GlowingStarsBackgroundCard } from '../ui/glowing-stars';

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
        <div className='pt-12 px-4'>
                <h1 className='text-center text-[26px] md:text-[32px] pb-2 '>Start to Learn, Earn and Explore Web3</h1>
        <div className=" flex mx-auto max-w-7xl flex-wrap md:gap-10 items-center justify-center">
        {data.map((item) => (

             <PinContainer 
              key={item.id}
             title={item.topic}
             href={item.link}
           >          <Link href={item.link} >
          <div
          
            className="hover:scale-110 duration-200  h-56  w-72  rounded-lg  text-center "
          >
                <GlowingStarsBackgroundCard className="">
            <div className=" text-white -mt-24 font-semibold text-[24px]">
              {item.topic}
            </div>

            <div className="text-[16px] text-black font-medium mb-6 ">
            
            </div>
            <div className="hover:scale-110 duration-200">
              <Link
                href={item.link}
                
                className=" p-3  font-semibold text-[16px] text-white bg-green-500 rounded-lg "
              >
                Explore the Platform
              </Link>
              
            </div>
            </GlowingStarsBackgroundCard>
          </div> </Link>
          </PinContainer>
         
        ))}
      </div></div>
  )
}

export default Resources