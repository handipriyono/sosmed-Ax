import { getListAlbum } from "../api/index";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const queryKey = "list-albums";

export const useGetListAlbum = () => {
  let { userId } = useParams();

  const { data } = useQuery({
    queryKey: [queryKey, userId],
    queryFn: () => getListAlbum(userId),
  });

  return {
    albums: data,
  };
};
