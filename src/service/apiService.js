import axios from 'axios';

// Replace 'YOUR_API_ENDPOINT' with the actual URL of your API
const API_ENDPOINT = 'YOUR_API_ENDPOINT';

// Function to upload a file using Axios as a multipart form data
const uploadFile = async (file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post(`${API_ENDPOINT}/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export { uploadFile };
