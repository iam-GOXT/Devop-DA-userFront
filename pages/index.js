import Head from "next/head";
import Image from "next/image";
import Hero from "../Components/Organisms/Hero";
import { Container, Footer, Main } from "../styles/Home.module";

export default function Home() {
  return (
    <Container>
      <Head>
        <meta charset="utf-8" />
        <title>Tuition Free Courses</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="Tuition Free Courses" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/ */}
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>

      <Main>
        <Hero />
      </Main>

      {/* <Footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span >
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </Footer> */}
    </Container>
  );
}
