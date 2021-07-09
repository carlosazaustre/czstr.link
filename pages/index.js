import { useUser } from "@auth0/nextjs-auth0";
import { Center, LinkBox, LinkOverlay } from "@chakra-ui/react";
import Head from "next/head";

import { Footer, FormAdd, Header, Nav } from "@/components";

export default function Home() {
  const { user, error } = useUser();

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Head>
        <title>Self-Made URL Shortener</title>
        <meta name="description" content="URL Shortener" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <Center height="600px">
        <main>
          <Header />
          {user ? (
            <FormAdd />
          ) : (
            <LinkBox
              bg="purple.500"
              borderWidth="1px"
              borderColor="purple.500"
              color="white"
              rounded="lg"
              w="100%"
              p={4}
              textAlign="center"
              fontSize="xl"
              fontWeight="bold"
              _hover={{ bg: "white", color: "purple.500" }}>
              <LinkOverlay href="/api/auth/login">
                Start creating your shortlinks
              </LinkOverlay>
            </LinkBox>
          )}
        </main>
      </Center>

      <Footer />
    </div>
  );
}
