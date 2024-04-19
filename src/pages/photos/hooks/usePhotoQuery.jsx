import { getListPhotos } from "../api/index";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const queryKey = "list-photos";

export const useGetListPhotos = () => {
  let { albumId } = useParams();

  const { data } = useQuery({
    queryKey: [queryKey, albumId],
    queryFn: () => getListPhotos(albumId),
  });

  return {
    photos: data,
  };
};
