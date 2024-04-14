import React, { useState } from "react";
import { HackathonData } from "@/data/HackathonData";
import Link from "next/link";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "../ui/glowing-stars";
import { TagRightIcon } from '@chakra-ui/react';
import { PiArrowCircleDownRight } from 'react-icons/pi';
import { BiRightArrow, BiSolidRightArrow, BiSolidRightArrowCircle } from 'react-icons/bi';


const Hackathon = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Function to handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Filter data based on search term
  const filteredData = HackathonData.filter((item) =>
    item.companyName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="py-32  ">
      <div className="flex gap-56 justify-center items-center mb-12 ">
        <div className="text-xl font-bold text-center ">
          All Hackathon platforms are listed here:
        </div>

        {/* <div className="max-w-md  ">
          <input
            type="text"
            placeholder="Search Company Name..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div> */}
      </div>

      <div className="mt-4 flex flex-wrap mx-auto max-w-7xl gap-6 md:gap-12 items-center justify-center">
      {filteredData.map((data)=>(
 <div key={data.id}  className="flex   items-center justify-center antialiased">
   <Link href={data.link} target='_blank'>
      <GlowingStarsBackgroundCard className="w-[300px]">
        <GlowingStarsTitle>{data.companyName}</GlowingStarsTitle>
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
  );
};

export default Hackathon;