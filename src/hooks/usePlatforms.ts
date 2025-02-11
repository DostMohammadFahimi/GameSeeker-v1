import { useQuery } from "@tanstack/react-query";
// import Platforms from "../data/Platforms";   
import APIClient from "../services/api-client";


  const apiClient = new APIClient<Platform>('/platforms/lists/parents')

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platfroms"],
    queryFn: apiClient.getAll,

    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    // initialData: { count: Platforms.length, results: Platforms },
  });

export default usePlatforms;
