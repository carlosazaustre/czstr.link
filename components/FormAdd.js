import { CheckIcon, CopyIcon } from "@chakra-ui/icons";
import {
  Button,
  Container,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useClipboard,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export function FormAdd({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { hasCopied, onCopy } = useClipboard("TODO");

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
          <Button type="submit" colorScheme="purple" w="100%" size="lg">
            Create shortlink
          </Button>

          <InputGroup size="lg">
            <Input
              type="text"
              value=""
              color="purple"
              borderColor="purple.200"
            />
            <InputRightElement>
              <Button colorScheme="purple" size="md" onClick={onCopy} mr={1}>
                {hasCopied ? <CheckIcon /> : <CopyIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </VStack>
      </form>
    </Container>
  );
}
