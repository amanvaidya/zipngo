import axios from 'axios';

const API_ENDPOINT = 'YOUR_API_ENDPOINT';

const uploadFile = async (file) => {
  console.log("upload")
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post(`${API_ENDPOINT}/compress`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const makeUrlShort = async (requestData) => {
  console.log("makeUrlShort")
  try {
    const response = await axios.post(`${API_ENDPOINT}/encode`, requestData);

    return response.data;
  } catch (error) {
    throw error;
  }
};



export { uploadFile };
