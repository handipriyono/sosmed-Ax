import Axios from "../../../commons/utils/axios";

export const getListPost = async ({ id }) => {
  try {
    const response = await Axios.get(`/posts?userId=${id}`);
    return response?.data;
  } catch (error) {
    console.error(error);
  }
};

export const createPost = async (payload) => {
  try {
    const response = await Axios.post("/posts", payload);
    return response?.data;
  } catch (error) {
    console.error(error);
  }
};

export const updatePost = async (payload) => {
  try {
    const response = await Axios.put(`/posts/${payload?.id}`, payload);
    return response?.data;
  } catch (error) {
    console.error(error);
  }
};

export const deletePost = async (id) => {
  try {
    const response = await Axios.delete(`/posts/${id}`);
    return response?.data;
  } catch (error) {
    console.error(error);
  }
};
