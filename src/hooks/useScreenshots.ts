import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import  Screenshot  from "../Entities/Screenshot";

const useScreenShots = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenShots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenShots;
