import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa"; // Import icons

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack spacing={4} className="items-center">
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text className="text-sm font-medium">
        {colorMode === "dark" ? "Dark Mode" : "Light Mode"}
      </Text>
      {colorMode === "dark" ? (
        <FaMoon className="text-yellow-300" /> // Moon icon for dark mode
      ) : (
        <FaSun className="text-yellow-500" /> // Sun icon for light mode
      )}
    </HStack>
  );
};

export default ColorModeSwitch;
