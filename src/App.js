import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PreLoader from './components/preloader';
import Login from './components/Login';
import Signup from './components/signup';
import Homepage from './components/homepage';
import Profile from './components/profile';
import Dash from './components/Dash';
import Page from './components/page';
import Main from './main';

function App() {
  // State to track whether the preloader has been shown
  const [preloaderShown, setPreloaderShown] = useState(true);

  // useEffect to hide the preloader after initial render
  useEffect(() => {
    // Set a timeout to hide the preloader after a delay (e.g., 2000 milliseconds)
    const timeoutId = setTimeout(() => {
      setPreloaderShown(false);
    }, 20000);

    // Clear the timeout if the component is unmounted before the delay
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
     {preloaderShown && <PreLoader />} {/* Show preloader only if preloaderShown is true */}
      <Router>
        <div className="App">
         
          <Routes>
          {/* <Route path="/Dash" element={<Dash/>}/> */}
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/page" element={<Page/>}/>
            {/* <Route path="/profile" element={<Profile/>}/> */}
          </Routes>
        </div>
        <Main/>
      </Router>
    </>
  );
}

export default App;
