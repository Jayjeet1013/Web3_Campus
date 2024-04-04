import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/Nav";
import "@/styles/globals.css";
import { ChakraBaseProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return(
  <>
  <Head>
        <title>Web3Campus </title>
        <meta
          name="DePin Bootstrap"
          content="Dep Network is the first platform to accelerate DePINs through a Tokenized platform and bootstrap offerings."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/deplogo.svg" />
      </Head>
  <ChakraBaseProvider>
  <Nav/>
  <Component {...pageProps} />
  <Footer/>
  </ChakraBaseProvider>
</>
)
}
