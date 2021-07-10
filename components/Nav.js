import { useUser } from "@auth0/nextjs-auth0";
import { Flex, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";

export function Nav() {
  const { user } = useUser();

  if (!user) return null;

  return (
    <Flex
      as="nav"
      bg="white"
      color="purple.500"
      px={8}
      py={4}
      w="100%"
      justify="flex-end"
      align="center">
      <Text mr={4}>Hi, {user.email}!</Text>
      <LinkBox
        borderWidth="1px"
        borderColor="purple.500"
        px={4}
        py={2}
        mr={4}
        rounded="lg"
        maxW="md"
        _hover={{ bg: "purple.500", color: "white" }}>
        <LinkOverlay href="/dashboard">My Links</LinkOverlay>
      </LinkBox>
      <LinkBox
        borderWidth="1px"
        borderColor="purple.500"
        px={4}
        py={2}
        rounded="lg"
        maxW="md"
        _hover={{ bg: "purple.500", color: "white" }}>
        <LinkOverlay href="/api/auth/logout">Logout</LinkOverlay>
      </LinkBox>
    </Flex>
  );
}
