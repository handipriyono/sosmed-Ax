import { getListUser } from "../api/index";
import { useQuery } from "@tanstack/react-query";

const queryKey = "list-users";

export const useGetListUser = () => {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: [queryKey],
    queryFn: () => getListUser(),
  });

  return {
    users: data,
    isLoading: isLoading || isFetching,
  };
};
