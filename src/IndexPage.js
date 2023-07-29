import React, { useRef, useState } from 'react';
import './IndexPage.css';
import { uploadFile, makeUrlShort } from './service/apiService';

const IndexPage = () => {
  const fileInputRef = useRef(null);
  const [urlToShorten, setUrlToShorten] = useState('');
  const [alias, setAlias] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');

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

  const handleMakeShort = async () => {
    try {
      const requestData = {
        url: urlToShorten,
        alias: alias,
      };

      const response = await makeUrlShort(requestData);
      setShortenedUrl(response.shortUrl);
    } catch (error) {
      console.error('Error making URL short:', error);
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
        <input
          type="text"
          placeholder="Enter any URL..."
          value={urlToShorten}
          onChange={(e) => setUrlToShorten(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter an alias (optional)..."
          value={alias}
          onChange={(e) => setAlias(e.target.value)}
        />
        <button onClick={handleMakeShort}>Make Short</button>
        <button className="download">Download QR Code</button>
        {shortenedUrl && <p>Shortened URL: {shortenedUrl}</p>}
      </div>
      {/* Add any other content you want to display on the index page */}
    </div>
  );
};

export default IndexPage;
