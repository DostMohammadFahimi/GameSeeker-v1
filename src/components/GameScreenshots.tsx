import { Image, SimpleGrid, Box, Skeleton } from "@chakra-ui/react";
import useScreenShots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenShots(gameId);
  
  if (isLoading) {
    return (
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        <Skeleton height="200px" borderRadius="lg" />
        <Skeleton height="200px" borderRadius="lg" />
      </SimpleGrid>
    );
  }

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
      {data?.results.map((file) => (
        <Box
          key={file.id}
          borderRadius="lg"
          overflow="hidden"
          boxShadow="lg"
          _hover={{ transform: 'scale(1.05)', boxShadow: 'xl', transition: 'all 0.3s ease' }}
        >
          <Image
            src={file.image}
            alt={`Screenshot of game ${gameId}`}
            objectFit="cover"
            borderRadius="lg"
            maxHeight="200px"
            width="100%"
            transition="transform 0.3s ease-in-out"
          />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
