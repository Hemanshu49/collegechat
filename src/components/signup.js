import React from "react";
import '../css/Login.css';
import '../css/signup.css';
import {Link } from 'react-router-dom';
import {FaUser , FaLock} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Signup = () =>{
    return(
        <div className="wrapper">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required />
                    <FaUser  className="icon"/>
                </div>

                <div className="input-box">
                    <input type="email" placeholder="Email" required />
                    <MdOutlineEmail className="icon"/>
                </div>

                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    <FaLock  className="icon"/>
                </div>

                <div className="input-box">
                    <input type="password" placeholder="Confrim Password" required />
                    <FaLock  className="icon"/>
                </div>


                <button type="submit">Register</button>

                <div className="register-link">
                    <p>Have an Account? <Link to="/login">Login</Link></p>
                </div>
            </form>
        </div>
    )
}

export default Signup ;