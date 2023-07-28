import axios from 'axios';

// Replace 'YOUR_API_ENDPOINT' with the actual URL of your API
const API_ENDPOINT = 'YOUR_API_ENDPOINT';

export const uploadFile = async (file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post(`${API_ENDPOINT}/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};
