import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
  const { data: Platforms } = usePlatforms();
  return Platforms?.results.find((p) => p.id === id);
};

export default usePlatform;
