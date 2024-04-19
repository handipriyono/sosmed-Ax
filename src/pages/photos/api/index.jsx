import Axios from "../../../commons/utils/axios";

export const getListPhotos = async (id) => {
  try {
    const response = await Axios.get(`/photos?albumId=${id}`);
    return response?.data;
  } catch (error) {
    console.error(error);
  }
};
