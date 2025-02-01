import Genres from "../data/Genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () => ({ data: Genres, isLoading: false, error: null });

export default useGenre;
