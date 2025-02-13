import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Platforms from "../data/Platforms";
import ms from "ms";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platfroms"],
    queryFn: apiClient.getAll,

    staleTime: ms("24h"),
    initialData: Platforms,
  });

export default usePlatforms;
