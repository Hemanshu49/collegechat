import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/profile';
import Dash from './components/Dash';
import Page from './components/page';

function Main () {
    return(
<>
        
        <Dash>
            <Routes>
              <Route path="profile" element={<Profile />} />
            </Routes>
          </Dash>
         
          </>
    );
        }

export default Main ;
