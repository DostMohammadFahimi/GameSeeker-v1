import { HStack, useColorMode, IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack spacing={2} align="center">
      <IconButton
        aria-label="Toggle color mode"
        icon={colorMode === "dark" ? <FaMoon /> : <FaSun />}
        onClick={toggleColorMode}
        variant="ghost"
        fontSize="1.5rem"
        color={colorMode === "dark" ? "yellow.300" : "yellow.500"}
        _hover={{ transform: "scale(1.1)", transition: "0.2s ease-in-out" }}
      />
    </HStack>
  );
};

export default ColorModeSwitch;
