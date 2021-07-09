import { useUser } from "@auth0/nextjs-auth0";
import { Center } from "@chakra-ui/react";
import Head from "next/head";

import { Footer, FormAdd, Header } from "@/components";

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading</div>;
  if (error) return <div>Error: {error}</div>;

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
          <FormAdd />
          {user ? (
            <a href="/api/auth/logout">Logout</a>
          ) : (
            <a href="/api/auth/login">Login</a>
          )}
        </main>
      </Center>

      <Footer />
    </div>
  );
}
