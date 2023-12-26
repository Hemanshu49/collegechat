import React, { useState } from 'react';
import {FaBars}from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoCallOutline , IoVideocamOutline , IoSettingsOutline ,IoChatboxOutline} from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import "./sidenavbar.css";
import { Link} from 'react-router-dom';

const Dash = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/profile",
            name:"Profile",
            icon:<CgProfile />
        },
        {
            path:"/page",
            name:"Chat",
            icon:<IoChatboxOutline/>
        },
        {
            path:"/call",
            name:"Call",
            icon:<IoCallOutline />
        },
        {
            path:"/video",
            name:"Video",
            icon:<IoVideocamOutline />
        },
        {
            path:"/setting",
            name:"Setting",
            icon:<IoSettingsOutline />
        },
        {
            path:"/",
            name:"Logout",
            icon:<CiLogout />
        }
    ]
    return (
        <div className="contain">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_sect">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <Link to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </Link>
                   ))
               }
           </div>
           <div style={ {width: "300px"}}>
            {/* <main>{children}</main> */}
            {/* <div>{Content}</div> */}
           </div>
        </div>
	);
};


export default Dash;