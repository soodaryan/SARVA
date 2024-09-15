import React, { useState } from 'react';
import './MainArea.css'; 

const MainArea= () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); 
      };
      reader.readAsDataURL(file); 
    }
  };

  return (
    <div>
      <h1>Upload Image</h1>
      <div className="file-input-container">
        <label htmlFor="file-upload" className="label-file-input">
          Choose File
        </label>
        <input 
          id="file-upload" 
          type="file" 
          accept="image/*" 
          onChange={handleImageUpload} 
        />
      </div>
      <br /><br />
      {image && <img src={image} alt="Uploaded" style={{ maxWidth: '400px' }} />}
    </div>
  );
};

export default MainArea;
