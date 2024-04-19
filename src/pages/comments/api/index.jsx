import Axios from "../../../commons/utils/axios";

export const getListComments = async (id) => {
  try {
    const response = await Axios.get(`/comments?postId=${id}`);
    return response?.data;
  } catch (error) {
    console.error(error);
  }
};

export const createComment = async (payload) => {
  try {
    const response = await Axios.post("/comments", payload);
    return response?.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateComment = async (payload) => {
  try {
    const response = await Axios.put(`/comments/${payload?.id}`, payload);
    return response?.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteComment = async (id) => {
  try {
    const response = await Axios.delete(`/comments/${id}`);
    return response?.data;
  } catch (error) {
    console.error(error);
  }
};
