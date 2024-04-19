import { useGetListPhotos } from "./usePhotoQuery";

const usePhoto = () => {
  const { photos } = useGetListPhotos();

  return {
    photos,
  };
};

export default usePhoto;
