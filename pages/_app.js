import { GlobalStyle } from "../styles/globals.module.js";
import "../styles/styles.css";
import "../styles/bootstrap.css";

import { ThemeProvider } from "styled-components";
import Navbar from "../Components/Layout/Navbar";
import Footer from "../Components/Layout/Footer";

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
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
