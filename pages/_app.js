import { GlobalStyle } from "@/styles/globals.module.js";
import "@/styles/styles.css";
import "@/styles/bootstrap.scss";

import { ThemeProvider } from "styled-components";
import Navbar from "@/Components/Layout/Navbar";
import Footer from "@/Components/Layout/Footer";
import Head from "next/head";

const theme = {
  colors: {
    primary: "#0d3959"
  }
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
        <br />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
