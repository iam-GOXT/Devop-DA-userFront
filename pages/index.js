import Head from "next/head";
// import Image from "next/image";
import Hero from "../Components/Organisms/Hero";
import { Container, Main } from "../styles/Home.module";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Tuition Free Courses</title>
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
