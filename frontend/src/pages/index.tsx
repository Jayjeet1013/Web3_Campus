import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Herosection from "@/components/home/Herosection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
 <div>

<Head>
        <title>Web3Campus </title>
        <meta
          name="DePin Bootstrap"
          content="Dep Network is the first platform to accelerate DePINs through a Tokenized platform and bootstrap offerings."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/deplogo.svg" />
      </Head>



<div>
  <Herosection/>
  
</div>

 </div>

  );
}
