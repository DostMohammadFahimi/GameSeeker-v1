import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import bullsEye from "../assets/bulls-eye.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "Exeptional", boxSize: "35px" },
  };

  return (
    <Image
      {...emojiMap[rating]}
      transition="transform 0.2s ease-in-out"
      _hover={{ transform: "scale(1.1)" }}
      marginTop={1}
    />
  );
};

export default Emoji;
