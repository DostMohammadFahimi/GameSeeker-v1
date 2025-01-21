import { useEffect, useState } from "react";
import apiClient from "../services/api-cliet";

interface Game {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
  release_date: Date;
  rating: number;
  platforms: string[];
  developers: string[];
  genres: string[];
  esrb_rating: string;
  metacritic_score: number;
  playtime: number;
  price: number;
  website: string;
  background_image: string;
  background_color: string;
  genres_string: string;
  platforms_string: string;
  developers_string: string;
  esrb_rating_string: string;
  metacritic_score_string: string;
  playtime_string: string;
  price_string: string;
  website_string: string;
  background_image_string: string;
  background_color_string: string;
  metacritic_score_formatted: string;
}

interface fetchGamesResponse {
  count: number;
  results: Game[];
}
const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<fetchGamesResponse>("/xgames")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });

  return (
    <>
      {error && <text className="text-danger-300">{error}</text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            {game.name}
            {game.title}
            {game.description}
            {game.image}
            {game.rating}
          </li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
