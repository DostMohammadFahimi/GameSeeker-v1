import { Text, SimpleGrid } from "@chakra-ui/react";
import Game from "../Entities/Game";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";

interface Props {
  game: Game;
}
const GameAttributes = ({ game }: Props) => {
  const termWithEmoji = (term: string) => {
    const emojiMap: Record<string, string> = {
      Platforms: "🎮",
      Metascore: "🏆",
      Genres: "📌",
      Rating: "⭐",
      Publishers: "🏢",
    };
    return `${emojiMap[term] || ""} ${term}`;
  };

  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItem term={termWithEmoji("Platforms")}>
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term={termWithEmoji("Metascore")}>
        <CriticScore score={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem term={termWithEmoji("Genres")}>
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem
        term={termWithEmoji("Rating")}
      >{`${game.rating_top} / 5 `}</DefinitionItem>
      <DefinitionItem term={termWithEmoji("Publishers")}>
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
