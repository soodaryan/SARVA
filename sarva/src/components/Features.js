import React, { useState } from 'react';
import './Features.css'; // Make sure to import the CSS file
import colorImage from './images/colorImage.png';
import multiTemporal from './images/multiTemporal.png';
import dataInsights from './images/dataInsights.png';
import contextEnriched from './images/contextEnriched.png';
import Logout from './images/logout.png';
import img from './images/WhatsApp Image 2024-07-27 at 10.40.48 PM.jpeg';
import cover from  './images/SAR_BACK_2.png';
// import visual from './images/visual.png';
const SidePanel = () => {
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
    <>
    <div>

      <div className='sidePanel'>
        <div className='sarva'>
            <h1 className='panelTitle'>SARVA</h1>
            <input type='text' placeholder='Search...' className='searchBox' />
        </div>
        <div className='panelHeader'>  
            <ul className='panelMenu'>
                <li className='panelItem'>
                <div className='panelLink'>
                    <img src={contextEnriched} alt=''/>
                    Visual Interpretability
                </div>
                </li>
                <li className='panelItem'>
                <div className='panelLink'>
                    <img src={multiTemporal} alt=''/>
                    Multi Temporal Imaging
                </div>
                </li>
                <li className='panelItem'>
                <div className='panelLink'>
                    <img src={dataInsights} alt=''/>
                    Data Insights
                </div>
                </li>
                <li className='panelItem'>
                <div className='panelLink'>
                    <img src={contextEnriched} alt=''/>
                    Context Enriched
                </div>
                </li>
                <li className='panelItem'>
                <div className='panelLink'>
                    <img src={colorImage} alt=''/>
                    Colorized Image Mapping
                </div>
                </li>
            </ul>
        </div>
        <div className='Logout'>
            <img src={Logout} alt=''/>
            Logout
        </div>  
      </div>
      <div className='mainarea'>
        <div className="file-input-container">
            <div className='upload-file'>
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
            {image && <img src={image} alt="Uploaded" style={{ marginTop: '-145px', maxWidth: '400px' }} />}
        </div>
        <div className='colorized'>
            <img src={img} alt="Upload" style={{ maxHeight: '400px', maxWidth: '400px' }} />
        </div>  
      </div>
    </div>
    </>

    
  );
};

export default SidePanel;
