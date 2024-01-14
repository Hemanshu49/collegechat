import React,{useState ,useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "../src/pages/Login";
import Signup from "../src/pages/signup";
import Homepage from "../src/components/homepage";
import Page from "../src/pages/page";
import Profile from "./pages/profile";
import Setting from "./pages/setting";
import Video from "./pages/video";

function App() {
  return (
    <>
    <Router>
        <div className="App">
         
          <Routes>
            <Route exact path="/" element={<Homepage />} />
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
