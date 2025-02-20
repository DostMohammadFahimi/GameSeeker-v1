import { useQuery } from "@tanstack/react-query";
import Genres from "../data/Genres";
import APIClient from "../services/api-client";
import ms from "ms";
import  Genre  from "../Entities/Genre";
const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,

    staleTime: ms("24h"),
    initialData: Genres,
  });
export default useGenres;
