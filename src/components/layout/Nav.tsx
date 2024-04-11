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

        <Link href="/">
          <div className="mx-[50px] text-xl">About</div>
        </Link>

       

        <Link href="/">
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
        px={8}
        pb={4}
        pt={2}
        display={{ base: menu ? "block" : "none", lg: "none" }}
      >
        <Flex
          color={"white"}
          gap={4}
          justifyContent="start"
          direction={"column"}
          display={{ base: "flex", lg: "none" }}
        >
          <Link _hover={{ color: "yellow", textDecoration: "none" }}>
            {" "}
            <Text>Home</Text>
          </Link>
          <Link _hover={{ color: "yellow", textDecoration: "none" }}>
            <Text>Pages</Text>
          </Link>
          <Link _hover={{ color: "yellow", textDecoration: "none" }}>
            <Text>Use cases</Text>
          </Link>
          <Link _hover={{ color: "yellow", textDecoration: "none" }}>
            <Text>Pricing</Text>
          </Link>
          <Link _hover={{ color: "yellow", textDecoration: "none" }}>
            <Text>Contact</Text>
          </Link>
          <Link _hover={{ color: "yellow", textDecoration: "none" }}>
            <Text>Login</Text>
          </Link>

          <Box color={"yellow.800"} pt={2}>
            <Button
              p={6}
              color="yellow"
              _hover={{ bgColor: "yellow", color: "black" }}
              border={"2px solid yellow"}
              bgColor={"transparent"}
            >
              Get Started
            </Button>
          </Box>
        </Flex>
      </Box>

    </div>
  );
}
