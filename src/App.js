import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PreLoader from './components/preloader';
import Login from './components/Login';
import Signup from './components/signup';
import Homepage from './components/homepage';
import Profile from './components/profile';
// import Dash from './components/Dash';
import Page from './components/page';
import Setting from './components/setting';
import Video from './components/video';
// import Main from './main';

function App() {
  const [preloaderShown, setPreloaderShown] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setPreloaderShown(false);
    }, 20000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
     {preloaderShown && <PreLoader />}    
      <Router>
        <div className="App">
         
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/page" element={<Page/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/setting" element={<Setting/>}/>
            <Route path="/video" element={<Video/>}/>
          </Routes>
        </div>
        {/* <Main/> */}
      </Router>
    </>
  );
}

export default App;
