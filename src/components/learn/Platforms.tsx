import React from 'react'
import { PlatformsData } from '@/data/Platforms'
import Link from 'next/link'
import { HoverEffect } from "../ui/card-hover-effect";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

const Platforms = () => {
  return (
    <div id='platforms' className='pt-7 '>

<div className="text-center p-4 bg-[#000]">
        <h3 className="h3 text-white">Web3 Learning Platforms</h3>
      </div>
 
 <div className='flex gap-4 flex-wrap mx-auto max-w-7xl my-10  items-center justify-center pt-4 '>
     
       <HoverEffect items={PlatformsData}/>
      
</div>
    </div>
  )
}

export default Platforms