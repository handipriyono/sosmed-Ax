import { useGetListAlbum } from "./useAlbumQuery";

const useAlbums = () => {
  const { albums } = useGetListAlbum();

  return {
    albumLists: albums,
  };
};

export default useAlbums;
