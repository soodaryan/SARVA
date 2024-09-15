import React from 'react';
import './Features.css'; // Make sure to import the CSS file
import colorImage from './images/colorImage.png';
import multiTemporal from './images/multiTemporal.png';
import dataInsights from './images/dataInsights.png';
import contextEnriched from './images/contextEnriched.png';
import Logout from './images/logout.png';
// import visual from './images/visual.png';
const SidePanel = () => {
  return (
    <div>
      <div className='sidePanel'>
        <div>
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
        <div>
            <button className='LogButton'><img src={Logout} alt='' /></button>
            <button className='LightMode'>Light Mode</button>
        </div>  
      </div>

    </div>
  );
};

export default SidePanel;
