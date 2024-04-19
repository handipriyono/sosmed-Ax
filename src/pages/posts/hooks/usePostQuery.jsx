import { getListPost, createPost, updatePost, deletePost } from "../api/index";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const queryKey = "list-posts";

export const useGetListPost = () => {
  let { userId } = useParams();
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: [queryKey, userId],
    queryFn: () => getListPost({ id: userId }),
  });

  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey, userId] });
    },
  });

  const mutationUpdate = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey, userId] });
    },
  });

  const mutationDelete = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey, userId] });
    },
  });

  return {
    posts: data,
    createPost: mutation.mutate,
    updatePost: mutationUpdate.mutate,
    deletePost: mutationDelete.mutate,
  };
};
