import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import {
  CalendarIcon,
  DownloadIcon,
  ExternalLinkIcon,
  LinkIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Center,
  Link,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Head from "next/head";

import { Footer, Nav } from "@/components";
import { formatDate } from "@/lib/date";
import { getUserByEmail } from "@/lib/db";

export default function Dashboard({ links }) {
  return (
    <div>
      <Head>
        <title>Self-Made URL Shortener</title>
        <meta name="description" content="URL Shortener" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <Center>
        <main>
          <Table variant="striped" colorScheme="purple" m={8}>
            <TableCaption placement="top" fontSize="3xl" fontWeight="bold">
              List of all my short links
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Created</Th>
                <Th>ShortLink</Th>
                <Th>URL</Th>
                <Th>Clicks</Th>
              </Tr>
            </Thead>
            <Tbody>
              {links.map((link) => (
                <Tr key={link.id}>
                  <Td>
                    <CalendarIcon mr={2} color="purple.500" />
                    <Box as="span">{formatDate(link.createdAt)}</Box>
                  </Td>
                  <Td>
                    <LinkIcon color="purple.500" />
                    <Link
                      ml={2}
                      color="purple.500"
                      href={`//czstr.link/${link.shortUrl}`}>
                      czstr.link/<strong>{link.shortUrl}</strong>
                    </Link>
                  </Td>
                  <Td>
                    <Link mr={2} href={link.url} isExternal>
                      {link.url}
                    </Link>
                    <ExternalLinkIcon color="purple.500" />
                  </Td>
                  <Td>
                    <DownloadIcon color="purple.500" />
                    <Box as="span">{link.clicks}</Box>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </main>
      </Center>
      <Footer />
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps({ req, res }) {
    const {
      user: { email },
    } = await getSession(req, res);

    const { links } = await getUserByEmail(email);

    return { props: { links: JSON.parse(JSON.stringify(links)) } };
  },
});
