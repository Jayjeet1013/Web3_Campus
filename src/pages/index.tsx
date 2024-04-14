import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import { Herosection } from "@/components/home/Herosection";
import Subscriber from "@/components/home/Subscriber";
import Projects from "@/components/home/Projects";
import Technology from "@/components/home/Tech";
import Contributers from "@/components/home/Team";
import Resources from "@/components/home/Resources";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      

      <div className=" ">
        <Herosection />
         <Projects/>
         <Resources/>
         <Technology/>
         {/* <Contributers/> */}
        <Subscriber />
       
      </div>
    </div>
  );
}
