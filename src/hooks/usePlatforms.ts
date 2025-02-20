import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Platforms from "../data/Platforms";
import ms from "ms";
import  Platform  from "../Entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platfroms"],
    queryFn: apiClient.getAll,

    staleTime: ms("24h"),
    initialData: Platforms,
  });

export default usePlatforms;
