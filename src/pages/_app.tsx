import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/Nav";
import "@/styles/globals.css";
import { ChakraBaseProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import ReactGA from 'react-ga';
import { Analytics } from "@vercel/analytics/react";


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    ReactGA.initialize("G-42CDFZZ1TL");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
      <Head>
        <title>Web3Campus </title>
        <meta
          name="description"
          content="Web3Campus - Learn Web3, Blockchain, Smart Contracts, and Decentralized Applications (dApps). Join our platform to explore hands-on tutorials and resources on building in the decentralized web. Empowering the next generation of Web3 developers."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/deplogo.svg" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />

        <script
          async
          data-id="6836916451"
          id="chatling-embed-script"
          type="text/javascript"
          src="https://chatling.ai/js/embed.js"
        ></script>
      </Head>
      <ChakraBaseProvider>
        <Nav />
        <Component {...pageProps} />
        <Analytics />
        <Footer />
      </ChakraBaseProvider>
    </>
  );
}
