import {
  getListComments,
  createComment,
  updateComment,
  deleteComment,
} from "../api/index";
import { useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const queryKey = "list-comments";

export const useGetListComments = () => {
  let { postId } = useParams();
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: [queryKey, postId],
    queryFn: () => getListComments(postId),
  });

  const mutation = useMutation({
    mutationFn: createComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey, postId] });
    },
  });

  const mutationUpdate = useMutation({
    mutationFn: updateComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey, postId] });
    },
  });

  const mutationDelete = useMutation({
    mutationFn: deleteComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey, postId] });
    },
  });

  return {
    createComment: mutation.mutate,
    updateComment: mutationUpdate.mutate,
    deleteComment: mutationDelete.mutate,
    comments: data,
  };
};
