import React from 'react'
import { LearnByGameData } from '@/data/learnByGame'
import Link from 'next/link'
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "../ui/glowing-stars";
import { TagRightIcon } from '@chakra-ui/react';
import { PiArrowCircleDownRight } from 'react-icons/pi';
import { BiRightArrow, BiSolidRightArrow, BiSolidRightArrowCircle } from 'react-icons/bi';

const LearnByGame = () => {
  return (
    <div id='games' className='pt-7 '>

<div className="text-center p-4 bg-[#000]">
        <h3 className="h3 text-white">Learn While You Play</h3>
      </div>
 
 <div className='flex gap-4 md:flex-row  flex-col items-center justify-center pt-4 '>
 {LearnByGameData.map((data)=>(
 <div key={data.id}  className="flex py-20 items-center justify-center antialiased">
   <Link href={data.link} target='_blank'>
      <GlowingStarsBackgroundCard >
        <GlowingStarsTitle>{data.name}</GlowingStarsTitle>
        <div className="flex justify-between items-end">
          <GlowingStarsDescription>
          {data.description}
          </GlowingStarsDescription>
          <div className=" rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
           <BiSolidRightArrowCircle size={28} color='white'/>
          </div>
        </div>
      </GlowingStarsBackgroundCard>
      </Link>
    </div>
     ))}


     
</div>
    </div>
  )
}

export default LearnByGame