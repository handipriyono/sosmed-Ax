import { useGetListUser } from "./useUserQuery";

const useUsers = () => {
  const { users } = useGetListUser();

  return {
    users,
  };
};

export default useUsers;
