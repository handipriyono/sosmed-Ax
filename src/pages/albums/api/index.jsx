import Axios from "../../../commons/utils/axios";

export const getListAlbum = async (id) => {
  try {
    const response = await Axios.get(`/albums?userId=${id}`);
    return response?.data;
  } catch (error) {
    console.error(error);
  }
};
