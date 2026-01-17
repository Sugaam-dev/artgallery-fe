

// // // // import React, { useState } from 'react';
// // // // import { useNavigate } from 'react-router-dom'; // To redirect after login
// // // // import './LoginPage.css';

// // // // const LoginPage = () => {
// // // //   const [email, setEmail] = useState('');
// // // //   const [loading, setLoading] = useState(false);
// // // //   const navigate = useNavigate();
  

// // // //   const handleFormSubmit = async (e) => {
// // // //     e.preventDefault();
    
// // // //     if (!email) return;

// // // //     setLoading(true);

// // // //     try {
// // // //       // 1. Logic: Call your FastAPI backend
// // // //       // Replace with your actual FastAPI URL (e.g., http://127.0.0.1:8000)
// // // //       const response = await fetch(' http://127.0.0.1:8000/auth/login', {
// // // //         method: 'POST',
// // // //         headers: {
// // // //           'Content-Type': 'application/x-www-form-urlencoded',
// // // //         },
// // // //         body: new URLSearchParams({
// // // //             'email': email,
// // // //         })
// // // //       });

// // // //       const data = await response.json();

// // // //       if (response.ok) {
// // // //         console.log("FastAPI Response:", data);
        
// // // //         // 2. Logic: Handle Success
// // // //         // For a "Continue" flow, you might now show a password field 
// // // //         // or redirect to a dashboard if using magic links.
// // // //         alert("Check your email or proceed to password!");
        
// // // //         // Example redirect:
// // // //         // navigate('/dashboard'); 
// // // //       } else {
// // // //         // 3. Logic: Handle Errors (User not found, etc.)
// // // //         alert(data.detail || "Something went wrong");
// // // //       }
// // // //     } catch (error) {
// // // //       console.error("API Error:", error);
// // // //       alert("Could not connect to FastAPI server.");
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="nk-app-wrapper">
// // // //       <div className="nk-login-card">
// // // //         <header className="nk-logo-group">
// // // //           <h1 className="nk-visual-logo">NK</h1>
// // // //           <span className="nk-domain-tag">nookatyou.com</span>
// // // //         </header>

// // // //         <section className="nk-header-text">
// // // //           <h2 className="nk-main-title">Sign in</h2>
// // // //           <p className="nk-sub-title">Sign in or create an account</p>
// // // //         </section>

// // // //         <button 
// // // //             className="nk-btn-shop-pay" 
// // // //             type="button" 
// // // //             onClick={() => navigate('/login/shop')} // Add this line
// // // //             >
// // // //           Sign in with <span className="nk-shop-italic">shop</span>
// // // //         </button>

// // // //         <div className="nk-form-divider">
// // // //           <span className="nk-divider-label">or</span>
// // // //         </div>

// // // //         <form className="nk-auth-form" onSubmit={handleFormSubmit}>
// // // //           <div className="nk-input-wrapper">
// // // //             <input
// // // //               type="email"
// // // //               className="nk-field-input"
// // // //               placeholder="Email"
// // // //               value={email}
// // // //               onChange={(e) => setEmail(e.target.value)}
// // // //               required
// // // //               disabled={loading}
// // // //             />
// // // //           </div>
          
// // // //           <button 
// // // //             type="submit" 
// // // //             className={`nk-btn-continue ${email && !loading ? 'nk-btn-enabled' : ''}`}
// // // //             disabled={!email || loading}
// // // //           >
// // // //             {loading ? 'Processing...' : 'Continue'}
// // // //           </button>
// // // //         </form>
// // // //       </div>

// // // //       <footer className="nk-policy-footer">
// // // //         <a href="/privacy" className="nk-footer-link">Privacy policy</a>
// // // //         <a href="/terms" className="nk-footer-link">Terms of service</a>
// // // //       </footer>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default LoginPage;

// // // import React, { useState } from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import './LoginPage.css';

// // // const LoginPage = () => {
// // //   const [email, setEmail] = useState('');
// // //   const [password, setPassword] = useState(''); // Added password state
// // //   const [loading, setLoading] = useState(false);
// // //   const navigate = useNavigate();

// // // const handleFormSubmit = async (e) => {
// // //   e.preventDefault();
// // //   if (!email || !password) return;

// // //   setLoading(true);

// // //   try {
// // //     const response = await fetch('http://127.0.0.1:8000/auth/login', {
// // //       method: 'POST',
// // //       headers: {
// // //         'Content-Type': 'application/x-www-form-urlencoded',
// // //       },
// // //       body: new URLSearchParams({
// // //           'username': email, // Changed from 'email' to 'username'
// // //           'password': password,
// // //       })
// // //     });

// // //     const data = await response.json();

// // //     if (response.ok) {
// // //       console.log("Success:", data);
// // //       alert("Login successful!");
// // //       // navigate('/dashboard'); 
// // //     } else {
// // //       // data.detail will contain "Invalid credentials" from your HTTPException
// // //       alert(data.detail || "Something went wrong");
// // //     }
// // //   } catch (error) {
// // //     console.error("API Error:", error);
// // //     alert("Could not connect to FastAPI server.");
// // //   } finally {
// // //     setLoading(false);
// // //   }
// // // };

// // //   // Logic to determine if button should be active
// // //   const isFormValid = email && password && !loading;

// // //   return (
// // //     <div className="nk-app-wrapper">
// // //       <div className="nk-login-card">
// // //         <header className="nk-logo-group">
// // //           <h1 className="nk-visual-logo">NK</h1>
// // //           <span className="nk-domain-tag">nookatyou.com</span>
// // //         </header>

// // //         <section className="nk-header-text">
// // //           <h2 className="nk-main-title">Sign in</h2>
// // //           <p className="nk-sub-title">Sign in or create an account</p>
// // //         </section>

// // //         <button 
// // //             className="nk-btn-shop-pay" 
// // //             type="button" 
// // //             onClick={() => navigate('/login/shop')}
// // //             >
// // //           Sign in with <span className="nk-shop-italic">shop</span>
// // //         </button>

// // //         <div className="nk-form-divider">
// // //           <span className="nk-divider-label">or</span>
// // //         </div>

// // //         <form className="nk-auth-form" onSubmit={handleFormSubmit}>
// // //           <div className="nk-input-group">
// // //             <input
// // //               type="email"
// // //               className="nk-field-input"
// // //               placeholder="Email"
// // //               value={email}
// // //               onChange={(e) => setEmail(e.target.value)}
// // //               required
// // //               disabled={loading}
// // //             />
// // //             {/* New Password Input */}
// // //             <input
// // //               type="password"
// // //               className="nk-field-input"
// // //               placeholder="Password"
// // //               value={password}
// // //               onChange={(e) => setPassword(e.target.value)}
// // //               required
// // //               disabled={loading}
// // //             />
// // //           </div>
          
// // //           <button 
// // //             type="submit" 
// // //             className={`nk-btn-continue ${isFormValid ? 'nk-btn-enabled' : ''}`}
// // //             disabled={!isFormValid}
// // //           >
// // //             {loading ? 'Signing in...' : 'Sign in'}
// // //           </button>
// // //         </form>
// // //       </div>

// // //       <footer className="nk-policy-footer">
// // //         <a href="/privacy" className="nk-footer-link">Privacy policy</a>
// // //         <a href="/terms" className="nk-footer-link">Terms of service</a>
// // //       </footer>
// // //     </div>
// // //   );
// // // };

// // // export default LoginPage;


// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import './LoginPage.css';

// // const LoginPage = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [loading, setLoading] = useState(false);
// //   const navigate = useNavigate();

// //   const handleFormSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!email || !password) return;

// //     setLoading(true);

// //     try {
// //       const response = await fetch('http://127.0.0.1:8000/auth/login', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/x-www-form-urlencoded',
// //         },
// //         body: new URLSearchParams({
// //           'username': email, 
// //           'password': password,
// //         })
// //       });

// //       const data = await response.json();

// //       if (response.ok) {
// //         // Redirect to Home Page
// //         navigate('/'); 
// //       } else {
// //         alert(data.detail || "Invalid email or password.");
// //       }
// //     } catch (error) {
// //       console.error("API Error:", error);
// //       alert("Could not connect to the server.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const isFormValid = email && password && !loading;

// //   return (
// //     <div className="nk-app-wrapper">
// //       <div className="nk-login-card">
// //         <header className="nk-logo-group">
// //           <h1 className="nk-visual-logo">ARTGALLARY</h1>
// //           <span className="nk-domain-tag">nookatyou.com</span>
// //         </header>

// //         <section className="nk-header-text">
// //           <h2 className="nk-main-title">Log in</h2>
// //           <p className="nk-sub-title">create an account or Sign in </p>
// //         </section>

// //         <button 
// //           className="nk-btn-shop-pay" 
// //           type="button" 
// //           onClick={() => navigate('/login/shop')}
// //         >
// //           Sign in with <span className="nk-shop-italic">ArtGallary</span>
// //         </button>

// //         <div className="nk-form-divider">
// //           <span className="nk-divider-label">or</span>
// //         </div>

// //         <form className="nk-auth-form" onSubmit={handleFormSubmit}>
// //           <div className="nk-input-group">
// //             <input
// //               type="email"
// //               className="nk-field-input"
// //               placeholder="Email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               required
// //               disabled={loading}
// //             />
// //             <input
// //               type="password"
// //               className="nk-field-input"
// //               placeholder="Password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               required
// //               disabled={loading}
// //             />
// //           </div>
          
// //           <button 
// //             type="submit" 
// //             className={`nk-btn-continue ${isFormValid ? 'nk-btn-enabled' : ''}`}
// //             disabled={!isFormValid}
// //           >
// //             {loading ? 'Signing in...' : 'Sign in'}
// //           </button>
// //         </form>
// //       </div>

// //       <footer className="nk-policy-footer">
// //         <a href="/privacy" className="nk-footer-link">Privacy policy</a>
// //         <a href="/terms" className="nk-footer-link">Terms of service</a>
// //       </footer>
// //     </div>
// //   );
// // };

// // export default LoginPage;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './LoginPage.css';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     if (!email || !password) return;
//     setLoading(true);

//     try {
//       const response = await fetch('http://127.0.0.1:8000/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//         body: new URLSearchParams({
//           'username': email, 
//           'password': password,
//         })
//       });

//       const data = await response.json();

//       if (response.ok) {
//         // Save auth data to localStorage
//         localStorage.setItem('token', data.access_token);
//         localStorage.setItem('userEmail', email);
        
//         // Redirect to Home
//         navigate('/'); 
//       } else {
//         alert(data.detail || "Invalid email or password.");
//       }
//     } catch (error) {
//       alert("Could not connect to the server.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const isFormValid = email && password && !loading;

//   return (
//     <div className="nk-app-wrapper">
//       <div className="nk-login-card">
//         <header className="nk-logo-group">
//           <h1 className="nk-visual-logo">ARTGALLARY</h1>
//           <span className="nk-domain-tag">nookatyou.com</span>
//         </header>

//         <section className="nk-header-text">
//           <h2 className="nk-main-title">Log in</h2>
//           <p className="nk-sub-title">create an account or Sign in</p>
//         </section>

//         <form className="nk-auth-form" onSubmit={handleFormSubmit}>
//           <div className="nk-input-group">
//             <input
//               type="email"
//               className="nk-field-input"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <input
//               type="password"
//               className="nk-field-input"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
          
//           <button 
//             type="submit" 
//             className={`nk-btn-continue ${isFormValid ? 'nk-btn-enabled' : ''}`}
//             disabled={!isFormValid}
//           >
//             {loading ? 'Signing in...' : 'Sign in'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const from = location.state?.from || "/";
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return;
    setLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:8000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'username': email, 
          'password': password,
        })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.access_token);
        localStorage.setItem('userEmail', email);
        localStorage.setItem("user", JSON.stringify(email));
        alert(from);
        navigate(from, { replace: true });
      } else {
        alert(data.detail || "Invalid email or password.");
      }
    } catch (error) {
      alert("Could not connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = email && password && !loading;

  return (
    <div className="nk-app-wrapper">
      <div className="nk-login-card">
        <header className="nk-logo-group">
          <h1 className="nk-visual-logo">ARTGALLARY</h1>
          <span className="nk-domain-tag">nookatyou.com</span>
        </header>

        <section className="nk-header-text">
          <h2 className="nk-main-title">Log in</h2>
          <p className="nk-sub-title">create an account or Sign in</p>
        </section>

        <form className="nk-auth-form" onSubmit={handleFormSubmit}>
          <div className="nk-input-group">
            <input
              type="email"
              className="nk-field-input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="nk-field-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button 
            type="submit" 
            className={`nk-btn-continue ${isFormValid ? 'nk-btn-enabled' : ''}`}
            disabled={!isFormValid}
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        {/* --- ADDED SECTION START --- */}
        <div className="nk-form-divider">
          <span className="nk-divider-label">or</span>
        </div>

        <button 
          className="nk-btn-shop-pay" 
          type="button" 
          onClick={() => navigate('/login/shop')}
        >
          Sign in with <span className="nk-shop-italic">shop</span>
        </button>
        {/* --- ADDED SECTION END --- */}

      </div>
    </div>
  );
};

export default LoginPage;