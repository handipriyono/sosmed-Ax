import Axios from "../../../commons/utils/axios";

export const getListUser = async () => {
  try {
    const response = await Axios.get(`/users`);
    return response?.data;
  } catch (error) {
    console.error(error);
  }
};
