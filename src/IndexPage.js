// src/IndexPage.js
import React, { useRef } from 'react';
import './IndexPage.css'; // Import the CSS file for styling

const IndexPage = () => {
  const fileInputRef = useRef(null);

  const handleChooseFile = () => {
    fileInputRef.current.click();
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
        <button>Upload</button>
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
