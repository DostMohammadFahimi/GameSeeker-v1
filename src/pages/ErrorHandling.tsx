import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorHandling = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Oops...</Heading>
        <Text color="red.400">
          {isRouteErrorResponse(error)
            ? "This page does not exist . . ."
            : "Unexpected Error . . ."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorHandling;
