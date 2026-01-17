


// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { useNavigate } from 'react-router-dom';
// // // // // import { Navbar, Container } from 'react-bootstrap'; // Corrected import (removed NavbarContainer)
// // // // // import './middleHeader.css';

// // // // // // Logos
// // // // // import logoWhite from '../../assets/images/logo-white.png';
// // // // // import logoBlack from '../../assets/images/logo-black.png'; 

// // // // // // Components
// // // // // import CustomNavbar from './Navbar'; 
// // // // // import TopHeader from './TopHeader'; 

// // // // // const MiddleHeader = () => {
// // // // //   const [isScrolled, setIsScrolled] = useState(false);
// // // // //   const [expanded, setExpanded] = useState(false); // Track if mobile menu is open
// // // // //   const navigate = useNavigate();

// // // // //   const isHomePage = location.pathname === "/" || location.pathname === "/home" ;
// // // // //   const isWhiteMode = isScrolled || !isHomePage;

// // // // //   // 1. Fix: Lock body scroll when mobile menu is open
// // // // //   useEffect(() => {
// // // // //     if (expanded) {
// // // // //       document.body.style.overflow = 'hidden';
// // // // //     } else {
// // // // //       document.body.style.overflow = 'auto';
// // // // //     }
// // // // //   }, [expanded]);

// // // // //   // 2. Handle scroll for navbar color transition
// // // // //   useEffect(() => {
// // // // //     const handleScroll = () => {
// // // // //       setIsScrolled(window.scrollY > 50);
// // // // //     };
// // // // //     window.addEventListener('scroll', handleScroll);
// // // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // // //   }, []);

// // // // //   const currentLogo = isWhiteMode ? logoBlack : logoWhite;

// // // // //   const handleLoginRedirect = () => {
// // // // //     // This tells the browser to change the URL to /login
// // // // //     navigate('/login'); 
// // // // //   };

// // // // //   return (
// // // // //     // Wrap the entire header in the Navbar context
// // // // //     <Navbar 
// // // // //       expand="lg" 
// // // // //       expanded={expanded} 
// // // // //       onToggle={(navExpanded) => setExpanded(navExpanded)}
// // // // //       className={`main-header-wrapper p-0 ${isWhiteMode ? 'scrolled force-white' : ''}`}
// // // // //     >
// // // // //       <div className="w-100">
// // // // //         <TopHeader isWhiteMode={isWhiteMode} />
        
// // // // //         <header className="middle-header">
// // // // //           <div className="header-container">
            
// // // // //             {/* LEFT SECTION: Search on Desktop, Burger Toggle on Mobile */}
// // // // //             <div className="header-left">
// // // // //               <button className="search-button desktop-only" type="button">
// // // // //                 <svg className="svg-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// // // // //                   <circle cx="11" cy="11" r="8"></circle>
// // // // //                   <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
// // // // //                 </svg>
// // // // //                 <span>Search</span>
// // // // //               </button>
              
// // // // //               {/* This Toggle replaces Search on mobile screens */}
// // // // //               <Navbar.Toggle aria-controls="main-navbar" className="mobile-burger-wrapper" />
// // // // //             </div>

// // // // //             {/* CENTER SECTION: Logo */}
// // // // //             <div className="header-center">
// // // // //               <a href="/home"><img src={currentLogo} alt="Logo" className="nav-logo" />  </a>
// // // // //             </div>

// // // // //             {/* RIGHT SECTION: Account and Cart */}
// // // // //             <div className="header-right">
// // // // //               <button 
// // // // //       className="account-button" 
// // // // //       onClick={handleLoginRedirect} // Add the function here
// // // // //     >
// // // // //       {/* User Icon SVG */}
// // // // //                 <svg className="svg-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// // // // //                   <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
// // // // //                   <circle cx="12" cy="7" r="4"></circle>
// // // // //                 </svg>
// // // // //               </button>
// // // // //               <button className="cart-button" type="button">
// // // // //                 <svg className="svg-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// // // // //                   <circle cx="9" cy="21" r="1"></circle>
// // // // //                   <circle cx="20" cy="21" r="1"></circle>
// // // // //                   <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
// // // // //                 </svg>
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>
// // // // //         </header>
        
// // // // //         {/* The Actual Nav Links (The Collapse part) */}
// // // // //         <CustomNavbar isScrolled={isWhiteMode} />
// // // // //       </div>
// // // // //     </Navbar>
// // // // //   );
// // // // // };

// // // // // export default MiddleHeader;

// // // // import React, { useState, useEffect } from 'react';
// // // // import { useNavigate, useLocation } from 'react-router-dom'; // Added useLocation
// // // // import { Navbar } from 'react-bootstrap';
// // // // import './middleHeader.css';

// // // // // Components
// // // // import CustomNavbar from './Navbar'; 
// // // // import TopHeader from './TopHeader'; 
// // // // import ProfileDropdown from './ProfileDropdown'; // Import the dropdown

// // // // // Logos
// // // // import logoWhite from '../../assets/images/logo-white.png';
// // // // import logoBlack from '../../assets/images/logo-black.png'; 

// // // // const MiddleHeader = () => {
// // // //   const [isScrolled, setIsScrolled] = useState(false);
// // // //   const [expanded, setExpanded] = useState(false);
// // // //   const navigate = useNavigate();
// // // //   const location = useLocation(); // To detect page changes

// // // //   // Check if user is logged in
// // // //   const token = localStorage.getItem('token');
// // // //   const userEmail = localStorage.getItem('userEmail') || "user@example.com";
// // // //   const isLoggedIn = !!token;

// // // //   const isHomePage = location.pathname === "/" || location.pathname === "/home";
// // // //   const isWhiteMode = isScrolled || !isHomePage;

// // // //   useEffect(() => {
// // // //     if (expanded) {
// // // //       document.body.style.overflow = 'hidden';
// // // //     } else {
// // // //       document.body.style.overflow = 'auto';
// // // //     }
// // // //   }, [expanded]);

// // // //   useEffect(() => {
// // // //     const handleScroll = () => {
// // // //       setIsScrolled(window.scrollY > 50);
// // // //     };
// // // //     window.addEventListener('scroll', handleScroll);
// // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // //   }, []);

// // // //   const currentLogo = isWhiteMode ? logoBlack : logoWhite;

// // // //   return (
// // // //     <Navbar 
// // // //       expand="lg" 
// // // //       expanded={expanded} 
// // // //       onToggle={(navExpanded) => setExpanded(navExpanded)}
// // // //       className={`main-header-wrapper p-0 ${isWhiteMode ? 'scrolled force-white' : ''}`}
// // // //     >
// // // //       <div className="w-100">
// // // //         <TopHeader isWhiteMode={isWhiteMode} />
        
// // // //         <header className="middle-header">
// // // //           <div className="header-container">
            
// // // //             {/* LEFT SECTION */}
// // // //             <div className="header-left">
// // // //               <button className="search-button desktop-only" type="button">
// // // //                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// // // //                   <circle cx="11" cy="11" r="8"></circle>
// // // //                   <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
// // // //                 </svg>
// // // //                 <span>Search</span>
// // // //               </button>
// // // //               <Navbar.Toggle aria-controls="main-navbar" className="mobile-burger-wrapper" />
// // // //             </div>

// // // //             {/* CENTER SECTION */}
// // // //             <div className="header-center">
// // // //               <a href="/home"><img src={currentLogo} alt="Logo" className="nav-logo" /></a>
// // // //             </div>

// // // //             {/* RIGHT SECTION */}
// // // //             <div className="header-right">
// // // //               {isLoggedIn ? (
// // // //                 /* Show Dropdown if Logged In */
// // // //                 <ProfileDropdown userEmail={userEmail} isWhiteMode={isWhiteMode} />
// // // //               ) : (
// // // //                 /* Show Login Icon if Not Logged In */
// // // //                 <button className="account-button" onClick={() => navigate('/login')}>
// // // //                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// // // //                     <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
// // // //                     <circle cx="12" cy="7" r="4"></circle>
// // // //                   </svg>
// // // //                 </button>
// // // //               )}
              
// // // //               <button className="cart-button" type="button">
// // // //                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// // // //                   <circle cx="9" cy="21" r="1"></circle>
// // // //                   <circle cx="20" cy="21" r="1"></circle>
// // // //                   <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
// // // //                 </svg>
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         </header>
        
// // // //         <CustomNavbar isScrolled={isWhiteMode} />
// // // //       </div>
// // // //     </Navbar>
// // // //   );
// // // // };

// // // // export default MiddleHeader;

// // // import React, { useState, useEffect } from 'react';
// // // import { useNavigate, useLocation } from 'react-router-dom';
// // // import { Navbar } from 'react-bootstrap';
// // // import './middleHeader.css';

// // // // Components
// // // import CustomNavbar from './Navbar'; 
// // // import TopHeader from './TopHeader'; 
// // // import ProfileDropdown from './ProfileDropdown'; 
// // // import CartDrawer from '../Context/CartDrawer'; // Import the drawer

// // // // Logos
// // // import logoWhite from '../../assets/images/logo-white.png';
// // // import logoBlack from '../../assets/images/logo-black.png'; 

// // // const MiddleHeader = () => {
// // //   const [isScrolled, setIsScrolled] = useState(false);
// // //   const [expanded, setExpanded] = useState(false);
// // //   const [showCart, setShowCart] = useState(false); // State for drawer visibility
  
// // //   const navigate = useNavigate();
// // //   const location = useLocation();

// // //   const token = localStorage.getItem('token');
// // //   const userEmail = localStorage.getItem('userEmail') || "user@example.com";
// // //   const isLoggedIn = !!token;

// // //   const isHomePage = location.pathname === "/" || location.pathname === "/home";
// // //   const isWhiteMode = isScrolled || !isHomePage;

// // //   useEffect(() => {
// // //     const handleScroll = () => setIsScrolled(window.scrollY > 50);
// // //     window.addEventListener('scroll', handleScroll);
// // //     return () => window.removeEventListener('scroll', handleScroll);
// // //   }, []);

// // //   const currentLogo = isWhiteMode ? logoBlack : logoWhite;

// // //   return (
// // //     <Navbar 
// // //       expand="lg" 
// // //       expanded={expanded} 
// // //       onToggle={(navExpanded) => setExpanded(navExpanded)}
// // //       className={`main-header-wrapper p-0 ${isWhiteMode ? 'scrolled force-white' : ''}`}
// // //     >
// // //       <div className="w-100">
// // //         <TopHeader isWhiteMode={isWhiteMode} />
        
// // //         <header className="middle-header">
// // //           <div className="header-container">
// // //             <div className="header-left">
// // //               <button className="search-button desktop-only" type="button">
// // //                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// // //                   <circle cx="11" cy="11" r="8"></circle>
// // //                   <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
// // //                 </svg>
// // //                 <span>Search</span>
// // //               </button>
// // //               <Navbar.Toggle aria-controls="main-navbar" />
// // //             </div>

// // //             <div className="header-center">
// // //               <a href="/home"><img src={currentLogo} alt="Logo" className="nav-logo" /></a>
// // //             </div>

// // //             <div className="header-right">
// // //               {isLoggedIn ? (
// // //                 <ProfileDropdown userEmail={userEmail} isWhiteMode={isWhiteMode} />
// // //               ) : (
// // //                 <button className="account-button" onClick={() => navigate('/login')}>
// // //                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// // //                     <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
// // //                     <circle cx="12" cy="7" r="4"></circle>
// // //                   </svg>
// // //                 </button>
// // //               )}
              
// // //               {/* TRIGGER BUTTON FOR CART */}
// // //               <button className="cart-button" type="button" onClick={() => setShowCart(true)}>
// // //                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// // //                   <circle cx="9" cy="21" r="1"></circle>
// // //                   <circle cx="20" cy="21" r="1"></circle>
// // //                   <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
// // //                 </svg>
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </header>
        
// // //         <CustomNavbar isScrolled={isWhiteMode} />

// // //         {/* CART DRAWER COMPONENT */}
// // //         <CartDrawer show={showCart} handleClose={() => setShowCart(false)} />
// // //       </div>
// // //     </Navbar>
// // //   );
// // // };

// // // export default MiddleHeader;

// // import React, { useState, useEffect } from 'react';
// // import { useNavigate, useLocation } from 'react-router-dom';
// // import { Navbar } from 'react-bootstrap';
// // import './middleHeader.css';

// // // Components
// // import CustomNavbar from './Navbar'; 
// // import TopHeader from './TopHeader'; 
// // import ProfileDropdown from './ProfileDropdown'; 
// // import CartDrawer from '../Context/CartDrawer'; // Import the drawer

// // // Logos
// // import logoWhite from '../../assets/images/logo-white.png';
// // import logoBlack from '../../assets/images/logo-black.png'; 

// // const MiddleHeader = () => {
// //   const [isScrolled, setIsScrolled] = useState(false);
// //   const [expanded, setExpanded] = useState(false);
// //   const [showCart, setShowCart] = useState(false);
// //   const [cartCount, setCartCount] = useState(0); // State for the cart dot
  
// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   const token = localStorage.getItem('token');
// //   const userEmail = localStorage.getItem('userEmail') || "user@example.com";
// //   const isLoggedIn = !!token;

// //   const isHomePage = location.pathname === "/" || location.pathname === "/home";
// //   const isWhiteMode = isScrolled || !isHomePage;

// //   // Function to calculate items in cart
// //   const updateCartCount = () => {
// //     const cart = JSON.parse(localStorage.getItem("cart") || "[]");
// //     setCartCount(cart.length);
// //   };

// //   useEffect(() => {
// //     const handleScroll = () => setIsScrolled(window.scrollY > 50);
// //     window.addEventListener('scroll', handleScroll);
    
// //     // Initial cart count load
// //     updateCartCount();

// //     // Listen for the custom event dispatched from ProductPage or CartDrawer
// //     window.addEventListener("cartUpdated", updateCartCount);

// //     return () => {
// //       window.removeEventListener('scroll', handleScroll);
// //       window.removeEventListener("cartUpdated", updateCartCount);
// //     };
// //   }, []);

// //   const currentLogo = isWhiteMode ? logoBlack : logoWhite;

// //   return (
// //     <Navbar 
// //       expand="lg" 
// //       expanded={expanded} 
// //       onToggle={(navExpanded) => setExpanded(navExpanded)}
// //       className={`main-header-wrapper p-0 ${isWhiteMode ? 'scrolled force-white' : ''}`}
// //     >
// //       <div className="w-100">
// //         <TopHeader isWhiteMode={isWhiteMode} />
        
// //         <header className="middle-header">
// //           <div className="header-container">
// //             <div className="header-left">
// //               <button className="search-button desktop-only" type="button">
// //                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// //                   <circle cx="11" cy="11" r="8"></circle>
// //                   <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
// //                 </svg>
// //                 <span>Search</span>
// //               </button>
// //               <Navbar.Toggle aria-controls="main-navbar" />
// //             </div>

// //             <div className="header-center">
// //               <a href="/home"><img src={currentLogo} alt="Logo" className="nav-logo" /></a>
// //             </div>

// //             <div className="header-right">
// //               {isLoggedIn ? (
// //                 <ProfileDropdown userEmail={userEmail} isWhiteMode={isWhiteMode} />
// //               ) : (
// //                 <button className="account-button" onClick={() => navigate('/login')}>
// //                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// //                     <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
// //                     <circle cx="12" cy="7" r="4"></circle>
// //                   </svg>
// //                 </button>
// //               )}
              
// //               <button 
// //                 className="cart-button position-relative" 
// //                 type="button" 
// //                 onClick={() => setShowCart(true)}
// //               >
// //                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// //                   <circle cx="9" cy="21" r="1"></circle>
// //                   <circle cx="20" cy="21" r="1"></circle>
// //                   <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
// //                 </svg>
                
// //                 {/* Notification dot shown when items are in cart */}
// //                 {cartCount > 0 && (
// //                   <span className="cart-dot"></span>
// //                 )}
// //               </button>
// //             </div>
// //           </div>
// //         </header>
        
// //         <CustomNavbar isScrolled={isWhiteMode} />

// //         <CartDrawer show={showCart} handleClose={() => setShowCart(false)} />
// //       </div>
// //     </Navbar>
// //   );
// // };

// // export default MiddleHeader;

// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { Navbar } from 'react-bootstrap';
// // Added FaYoutube to the imports
// import { FaFacebookF, FaInstagram, FaTelegramPlane, FaYoutube } from 'react-icons/fa'; 
// import './middleHeader.css';

// // Components
// import CustomNavbar from './Navbar'; 
// import TopHeader from './TopHeader'; 
// import ProfileDropdown from './ProfileDropdown'; 
// import CartDrawer from '../Context/CartDrawer';

// // Logos
// import logoWhite from '../../assets/images/logo-white.png';
// import logoBlack from '../../assets/images/logo-black.png'; 

// const MiddleHeader = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [expanded, setExpanded] = useState(false);
//   const [showCart, setShowCart] = useState(false);
//   const [cartCount, setCartCount] = useState(0);
  
//   const navigate = useNavigate();
//   const location = useLocation();

//   const token = localStorage.getItem('token');
//   const userEmail = localStorage.getItem('userEmail') || "user@example.com";
//   const isLoggedIn = !!token;

//   const isHomePage = location.pathname === "/" || location.pathname === "/home";
//   const isWhiteMode = isScrolled || !isHomePage;

//   const updateCartCount = () => {
//     const cart = JSON.parse(localStorage.getItem("cart") || "[]");
//     setCartCount(cart.length);
//   };

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     updateCartCount();
//     window.addEventListener("cartUpdated", updateCartCount);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener("cartUpdated", updateCartCount);
//     };
//   }, []);

//   const currentLogo = isWhiteMode ? logoBlack : logoWhite;

//   return (
//     <Navbar 
//       expand="lg" 
//       expanded={expanded} 
//       onToggle={(navExpanded) => setExpanded(navExpanded)}
//       className={`main-header-wrapper p-0 ${isWhiteMode ? 'scrolled force-white' : ''}`}
//     >
//       <div className="w-100">
//         <TopHeader isWhiteMode={isWhiteMode} />
        
//         <header className="middle-header">
//           <div className="header-container">
            
//             {/* LEFT SECTION: Social Icons (Facebook, Instagram, Telegram, YouTube) */}
//             <div className="header-left d-flex align-items-center">
//               <div className="social-icons-wrapper desktop-only d-flex align-items-center gap-3">
//                 <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-link">
//                    <FaFacebookF size={18} />
//                 </a>
//                 <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link">
//                    <FaInstagram size={18} />
//                 </a>
//                 {/* <a href="https://telegram.org" target="_blank" rel="noreferrer" className="social-link">
//                    <FaTelegramPlane size={18} />
//                 </a> */}
//                 <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-link">
//                    <FaYoutube size={20} /> {/* Slightly larger to match visual weight */}
//                 </a>
//               </div>
//               <Navbar.Toggle aria-controls="main-navbar" />
//             </div>

//             <div className="header-center">
//               <a href="/home"><img src={currentLogo} alt="Logo" className="nav-logo" /></a>
//             </div>

//             <div className="header-right">
//               {isLoggedIn ? (
//                 <ProfileDropdown userEmail={userEmail} isWhiteMode={isWhiteMode} />
//               ) : (
//                 <button className="account-button" onClick={() => navigate('/login')}>
//                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
//                     <circle cx="12" cy="7" r="4"></circle>
//                   </svg>
//                 </button>
//               )}
              
//               <button 
//                 className="cart-button position-relative" 
//                 type="button" 
//                 onClick={() => setShowCart(true)}
//               >
//                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <circle cx="9" cy="21" r="1"></circle>
//                   <circle cx="20" cy="21" r="1"></circle>
//                   <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
//                 </svg>
//                 {cartCount > 0 && <span className="cart-dot"></span>}
//               </button>
//             </div>
//           </div>
//         </header>
        
//         <CustomNavbar isScrolled={isWhiteMode} />
//         <CartDrawer show={showCart} handleClose={() => setShowCart(false)} />
//       </div>
//     </Navbar>
//   );
// };

// export default MiddleHeader;

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'; 
import './middleHeader.css';

// Components
import CustomNavbar from './Navbar'; 
// import TopHeader from './TopHeader';  <-- REMOVED THIS IMPORT
import ProfileDropdown from './ProfileDropdown'; 
import CartDrawer from '../Context/CartDrawer'; 

// Logos
import logoWhite from '../../assets/images/logo-white.png';
import logoBlack from '../../assets/images/logo-black.png'; 

const MiddleHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  
  const navigate = useNavigate();
  const location = useLocation();

  const token = localStorage.getItem('token');
  const userEmail = localStorage.getItem('userEmail') || "user@example.com";
  const isLoggedIn = !!token;

  const isHomePage = location.pathname === "/" || location.pathname === "/home";
  const isWhiteMode = isScrolled || !isHomePage;

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartCount(cart.length);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    updateCartCount();
    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  const currentLogo = isWhiteMode ? logoBlack : logoWhite;

  return (
    <Navbar 
      expand="lg" 
      expanded={expanded} 
      onToggle={(navExpanded) => setExpanded(navExpanded)}
      className={`main-header-wrapper p-0 ${isWhiteMode ? 'scrolled force-white' : ''}`}
    >
      <div className="w-100">
        {/* <TopHeader isWhiteMode={isWhiteMode} />  <-- REMOVED THIS LINE */}
        
        <header className="middle-header">
          <div className="header-container">
            
            {/* LEFT SECTION: Social Icons */}
            <div className="header-left d-flex align-items-center">
              <div className="social-icons-wrapper desktop-only d-flex align-items-center gap-3">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-link">
                   <FaFacebookF size={18} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link">
                   <FaInstagram size={18} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-link">
                   <FaYoutube size={20} />
                </a>
              </div>
              <Navbar.Toggle aria-controls="main-navbar" />
            </div>

            <div className="header-center">
              <a href="/home"><img src={currentLogo} alt="Logo" className="nav-logo" /></a>
            </div>

            <div className="header-right">
              {isLoggedIn ? (
                <ProfileDropdown userEmail={userEmail} isWhiteMode={isWhiteMode} />
              ) : (
                <button className="account-button" onClick={() => navigate('/login')}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </button>
              )}
              
              <button 
                className="cart-button position-relative" 
                type="button" 
                onClick={() => setShowCart(true)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                {cartCount > 0 && <span className="cart-dot"></span>}
              </button>
            </div>
          </div>
        </header>
        
        <CustomNavbar isScrolled={isWhiteMode} />
        <CartDrawer show={showCart} handleClose={() => setShowCart(false)} />
      </div>
    </Navbar>
  );
};

export default MiddleHeader;