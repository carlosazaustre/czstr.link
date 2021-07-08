import { CheckIcon, CopyIcon } from "@chakra-ui/icons";
import {
  Button,
  Container,
  Flex,
  Input,
  Text,
  useClipboard,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function FormAdd() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm();

  const toast = useToast();
  const { hasCopied, onCopy } = useClipboard("TODO");
  const [link, setLink] = useState("");

  const onSubmit = async (data) => {
    const response = await fetch("/api/shortUrl", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const res = await response.json();
    reset(response);
    setLink(`https://czstr.link/${res.data.shortUrl}`);

    toast({
      title: "Short URL copied to clipboard",
      variant: "top-accent",
      position: "top-right",
      description: "Now, you can use it!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container size="lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4} p={4} bg="purple.50" rounded="lg">
          <Input
            bg="white"
            size="lg"
            placeholder="Enter a URL..."
            type="text"
            {...register("url", {
              required: {
                value: true,
                message: "The field is required",
              },
              pattern: {
                value:
                  /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/,
                message: "The URL is invalid",
              },
            })}
            borderColor={(errors?.url && "red.400") || "gray.200"}
          />
          <Text color="red">{errors?.url?.message}</Text>
          <Button
            type="submit"
            colorScheme="purple"
            w="100%"
            size="lg"
            isLoading={isSubmitting}
            loadingText="Submitting">
            Create shortlink
          </Button>

          {link && (
            <Flex
              bg="white"
              border="purple.200"
              rounded="lg"
              p={2}
              pl={4}
              w="100%"
              align="center"
              justify="space-between"
              color="purple">
              <Text>{link}</Text>
              <Button colorScheme="purple" size="md" onClick={onCopy} mr={1}>
                {hasCopied ? <CheckIcon /> : <CopyIcon />}
              </Button>
            </Flex>
          )}
        </VStack>
      </form>
    </Container>
  );
}
