import React from "react";
import '../css/Login.css';
import {Link} from 'react-router-dom';
import {FaUser , FaLock} from "react-icons/fa";

const Login = () =>{
    return(
        <div className="wrapper">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required />
                    <FaUser  className="icon"/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    <FaLock  className="icon"/>
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox"/>Remember Me</label>
                    <a href="//">Forgot password</a>
                </div>

                <button type="submit">LOGIN</button>

                <div className="register-link">
                    <p>Don,t Have an Account? <Link to="/register">REGISTER</Link></p>
                </div>
            </form>
        </div>
    )
}

export default Login ;