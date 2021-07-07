import { Center } from "@chakra-ui/react";
import Head from "next/head";

import { Footer, FormAdd, Header } from "@/components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Self-Made URL Shortener</title>
        <meta name="description" content="URL Shortener" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Center height="600px">
        <main>
          <Header />
          <FormAdd onSubmit={(data) => console.log(data)} />
        </main>
      </Center>

      <Footer />
    </div>
  );
}
