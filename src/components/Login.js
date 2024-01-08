import React from "react";
import '../css/Login.css';
import { Link } from 'react-router-dom';
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
    return (
        <>
            <div className="wrapper">
                <form action="">
                    <center>
                        <h1 id="logtitle" >Login</h1>
                        <hr id="hr" />
                    </center>
                    <div className="input-box">
                        <FaUser className="icon" />
                        <input type="text" placeholder="Username" required />
                    </div>
                    <div className="input-box">
                        <FaLock className="icon" />
                        <input type="password" placeholder="Password" required />
                    </div>

                    <div className="remember-forgot">
                        <label><input type="checkbox" id="checkbox" />Remember Me</label>
                        <a href="//">Forgot password</a>
                    </div>

                    <center><button type="submit" id="logbut" >LOGIN</button></center>

                    <div className="register-link">
                        <p>Don,t Have an Account? <Link to="/register">REGISTER</Link></p>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;