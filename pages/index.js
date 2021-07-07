import Head from "next/head";

import { Footer } from "@/components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Self-Made URL Shortener</title>
        <meta name="description" content="URL Shortener" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>Hello, World!</main>

      <Footer />
    </div>
  );
}
