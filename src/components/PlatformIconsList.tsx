import { Box, HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import  Platform  from "../Entities/Platform";

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
          borderRadius="md"
          _hover={{
            bg: "gray.200",
            color: "blue.500",
            transform: "scale(1.2)",
          }}
          transition="all 0.2s ease-in-out"
        >
          <Icon
            key={platform.id}
            as={iconMap[platform.slug]}
            color="orange.300"
            w={3}
            h={3}
          />
        </Box>
      ))}
    </HStack>
  );
};

export default PlatformIconsList;
