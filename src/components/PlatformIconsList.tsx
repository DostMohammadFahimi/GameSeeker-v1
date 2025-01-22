import { Platform } from "../hooks/useGame";
import { HStack, Icon, Box } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconsList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack marginY={2}>
      {platforms.map((platform) => (
        <Box
          as="button"
          key={platform.slug}
          padding={1}
          borderRadius="lg"
          _hover={{
            bg: "gray.200",
            color: "blue.500",
            transform: "scale(1.2)",
          }}
          transition="all 0.2s ease-in-out"
        >
          <Icon as={iconMap[platform.slug]} color="orange.300" w={4} h={4} />
        </Box>
      ))}
    </HStack>
  );
};

export default PlatformIconsList;
