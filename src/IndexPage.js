import React, { useRef } from 'react';
import './IndexPage.css'; 
import { uploadFile } from './service/apiService';
const IndexPage = () => {
  const fileInputRef = useRef(null);

  const handleChooseFile = () => {
    fileInputRef.current.click();
  };

  const handleUpload = async () => {
    try {
      const fileInput = fileInputRef.current;
      const file = fileInput && fileInput.files && fileInput.files[0];

      if (file) {
        // Call the API service function for uploading
        const response = await uploadFile(file);
        console.log('API response:', response.data);
      } else {
        console.error('No file selected.');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="index-page-container">
      <div className="upload-section">
        <h2>Upload File to Compress</h2>
        <input
          type="file"
          accept=".pdf, .jpeg, .jpg, .png, .doc, .docx"
          ref={fileInputRef}
          style={{ display: 'none' }}
        />
        <label onClick={handleChooseFile}>Choose File</label>
        <button onClick={handleUpload}>Upload</button>
      </div>
      <div className="input-section">
        <h2>Make URL Short</h2>
        <input type="text" placeholder="Enter any URL..." />
        <button>Make Short</button>
        <button class="download">Download QR Code</button>
      </div>
      {/* Add any other content you want to display on the index page */}
    </div>
  );
};

export default IndexPage;
