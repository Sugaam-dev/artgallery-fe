// // import React from "react";
// // import "./TopHeader.css";
// // import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";

// // const TopHeader = () => {
// //   return (
// //     <div className="top-header">
// //       <div className="top-left">
// //         <a href="/aboutUs">About us</a>
// //         <a href="#">Reviews</a>
// //         <a href="#">Inspiration</a>
// //         <a href="#">Buying Guide</a>
// //         <a href="#">B2B</a>
// //       </div>

// //       <div className="top-right">
// //         <FaInstagram className="top-icon" />
// //         <FaFacebookF className="top-icon" />
// //         <FaPinterestP className="top-icon" />
// //       </div>
// //     </div>
// //   );
// // };

// // export default TopHeader;

// import React from "react";
// // Import Link from react-router-dom for internal navigation
// import { Link } from "react-router-dom"; 
// import "./TopHeader.css";
// import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";

// const TopHeader = () => {
//   return (
//     <div className="top-header">
//       <div className="top-left">
//         {/* Change <a> tag to Link component */}
//         <Link to="/about">About us</Link> 
        
//         {/* You should ideally change all internal <a> tags to Link */}
//         <Link to="#">Reviews</Link>
//         <Link to="#">Inspiration</Link>
//         <Link to="#">Buying Guide</Link>
//         <Link to="#">B2B</Link>
//       </div>

//       <div className="top-right">
//         <FaInstagram className="top-icon" />
//         <FaFacebookF className="top-icon" />
//         <FaPinterestP className="top-icon" />
//       </div>
//     </div>
//   );
// };

// export default TopHeader;

import React from "react";
import { Link } from "react-router-dom"; 
import "./TopHeader.css";
import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";

const TopHeader = ({ isWhiteMode }) => {
  return (
    <div className={`top-header ${isWhiteMode ? 'top-header-white' : ''}`}>
      <div className="top-left">
        <Link to="/about">About us</Link> 
        <Link to="/reviews">Reviews</Link>
        <Link to="/inspiration">Inspiration</Link>
        <Link to="/guide">Buying Guide</Link>
        <Link to="/b2b">B2B</Link>
      </div>

      <div className="top-right">
        <FaInstagram className="top-icon" />
        <FaFacebookF className="top-icon" />
        <FaPinterestP className="top-icon" />
      </div>
    </div>
  );
};

export default TopHeader;