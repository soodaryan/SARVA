// import React from 'react';
// import './LandingPage.css'; // Optional: Add custom CSS if needed

// const LandingPage = () => {
//     return (
//         <div className="landing-page">
//             <nav className="navbar">
//                 <img src="\Sarva logo.jpg" alt="SARVA Logo" className="sarva-logo" />
//                 <ul className="nav-links">
//                     <li><a href="#home">Home</a></li>
//                     <li><a href="#about">About</a></li>
//                     <li><a href="#activities">Activities</a></li>
//                     <li><a href="#login">Login/Sign Up</a></li>
//                 </ul>
//                 <div className="search-box">
//                     <input type="text" placeholder="Search..." />
//                     <button>🔍</button>
//                 </div>
//             </nav>

//             <header className="hero-section">
//                 <div className="hero-content">
//                     <h1>SAR Vision Agent</h1>
//                     <p>"Transform grayscale SAR images into actionable intelligence with SARVA. Leveraging AI and geospatial expertise, SARVA streamlines disaster response, change detection, and business planning."</p>
//                     <button className="learn-more-btn">Learn More</button>
//                 </div>
//                 <div className="hero-image">
//                     <img src="\SAR BACK 2.png" alt="SAR Image" />
//                 </div>
//             </header>

//             <footer className="footer">
//                 <ul className="footer-links">
//                     <li><a href="#home">Home</a></li>
//                     <li><a href="#services">Services</a></li>
//                     <li><a href="#blog">Blog</a></li>
//                     <li><a href="#help">Help Center</a></li>
//                     <li><a href="#about">About</a></li>
//                 </ul>
//                 <div className="social-icons">
//                     <a href="#"><i className="fa fa-facebook"></i></a>
//                     <a href="#"><i className="fa fa-twitter"></i></a>
//                     <a href="#"><i className="fa fa-instagram"></i></a>
//                     <a href="#"><i className="fa fa-linkedin"></i></a>
//                 </div>
//                 <p>&copy; Greelogix @ 202X. All rights reserved.</p>
//             </footer>
//         </div>
//     );
// };

// export default LandingPage;
import React from 'react';
import './LandingPage.css'; // Make sure to include the CSS for styling

const LandingPage = () => {
    return (
        <div className="landing-page">
            <nav className="navbar">
                <img src="/Sarva logo.jpg" alt="SARVA Logo" className="sarva-logo" />
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#activities">Activities</a></li>
                    <li><a href="#login">Login/Sign Up</a></li>
                </ul>
                <div className="search-box">
                    <input type="text" placeholder="Search..." />
                    <button>🔍</button>
                </div>
            </nav>

            <header className="hero-section">
                <div className="overlay">
                    <div className="hero-content">
                        <h1>SAR Vision Agent</h1>
                        <p>"Transform grayscale SAR images into actionable intelligence with SARVA. Leveraging AI and geospatial expertise, SARVA streamlines disaster response, change detection, and business planning."</p>
                        <button className="learn-more-btn">Learn More</button>
                    </div>
                </div>
            </header>

            <footer className="footer">
                <ul className="footer-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#help">Help Center</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
                <div className="social-icons">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-instagram"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                </div>
                <p>&copy; Greelogix @ 202X. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
