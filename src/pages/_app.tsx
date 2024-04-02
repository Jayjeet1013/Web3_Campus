import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/Nav";
import "@/styles/globals.css";
import { ChakraBaseProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return(
  <>
  <ChakraBaseProvider>
  <Nav/>
  <Component {...pageProps} />
  <Footer/></ChakraBaseProvider>
</>
)
}
