import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Box, Heading, Spinner } from "@chakra-ui/react";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw Error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <Box>{game.description_raw}</Box>
    </>
  );
};

export default GameDetailPage;
