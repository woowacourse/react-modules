export function splitIntoChunks(origin: string, ...chunkSizes: number[]) {
  return chunkSizes.reduce((result: string[], chunkSize: number) => {
    const chunk = origin.slice(0, chunkSize);
    origin = origin.slice(chunkSize);
    return [...result, chunk];
  }, []);
}
