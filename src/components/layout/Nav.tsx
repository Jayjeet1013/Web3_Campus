import { Button, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { ethers } from 'ethers';
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Box } from "@chakra-ui/react";




export default function Nav() {

  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };


  return (
    <div className="fixed z-[100] bg-black text-white mx-auto w-full ">
    <nav className="flex  items-center mx-auto max-w-7xl px-4 py-6 justify-between   border-dark">
      {/* logo */}
      <div className="text-2xl">
        <Link href='/'> <h3>
          ⚡️ Web3<b>Campus</b>
        </h3></Link>
        
      
      </div>
      
    
      <div className=" items-center justify-around hidden lg:flex">
        <Link href="/learn">
          <div className="mx-[50px] text-xl">👨‍💻 Learn</div>
        </Link> 
        
        <Link href="/earn">
          <div className="mx-[50px] text-xl">💰 Earn</div>
        </Link>

        <Link href="/explore">
          <div className="mx-[50px] text-xl">Explore</div>
        </Link>

        {/* <Link href="/">
          <div className="mx-[50px] text-xl">About</div>
        </Link> */}

       

        <Link href="/newsletter">
          <div className="mx-[50px] text-xl">News</div>
        </Link>


        <Link href="/contact">
          <div className="mx-[50px] text-xl">Contact</div>
        </Link>


    
      </div>
        <Box display={{ base: "flex", lg: "none" }} onClick={toggleMenu}>
            {menu ? (
              <AiOutlineClose style={{ color: "white", fontSize: 32 }} />
            ) : (
              <AiOutlineMenu style={{ color: "white", fontSize: 32 }} />
            )}
          </Box>

    </nav>
    <Box
        w={"full"}
        bg={"#1a1d24"}
        px={10}
        pb={6}
        pt={8}
        display={{ base: menu ? "block" : "none", lg: "none" }}
      >
        <Flex
          color={"white"}
          gap={4}
          justifyContent="start"
          direction={"column"}
          display={{ base: "flex", lg: "none" }}
        >
          <Link href="/" _hover={{ color: "yellow", textDecoration: "none" }}>
            {" "}
            <Text>Home</Text>
          </Link>
          <Link href="/learn" _hover={{ color: "yellow", textDecoration: "none" }}>
            <Text>👨‍💻 Learn</Text>
          </Link>
          <Link href="/earn" _hover={{ color: "yellow", textDecoration: "none" }}>
            <Text>💰 Earn</Text>
          </Link>
          
        
          <Link href="/explore" _hover={{ color: "yellow", textDecoration: "none" }}>
            <Text>Explore</Text>
          </Link>
          <Link href="/newsletter" _hover={{ color: "yellow", textDecoration: "none" }}>
            <Text>News</Text>
          </Link>
          <Link href="/contact" _hover={{ color: "yellow", textDecoration: "none" }}>
            <Text>Contact</Text>
          </Link>
         

        
        </Flex>
      </Box>

    </div>
  );
}
