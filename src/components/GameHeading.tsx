import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);

  const {data: Platforms}= usePlatforms();
  const platform = Platforms?.results.find(p=> p.id === gameQuery.platformId)

  const heading = `${platform?.name || ""}  ${
    genre?.name || ""
  }  Game `;

  return (
    <Heading as="h1" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
