import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from "react-icons/fa";
import axios from 'axios';

const Login = () => {
    const [email, setName] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleChange = async () => {
        console.log("hello")

        if (!email || !password) {
            alert("All fields are required");
            return;
        }

        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const { data } = await axios.post("/api/user/login", { email, password }, config);
            localStorage.setItem("userInfo", JSON.stringify(data));
            console.log(data)
            navigate("/page");
            console.log("success");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="wrapper">
            <form onSubmit={(e) => {
                e.preventDefault();
                handleChange();
            }}>
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" onChange={(e) => setName(e.target.value)} required />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                    <FaLock className="icon" />
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember Me</label>
                    <a href="//">Forgot password</a>
                </div>

                <button type="submit">LOGIN</button>

                <div className="register-link">
                    <p>Don't Have an Account? <Link to="/register">REGISTER</Link></p>
                </div>
            </form>
        </div>
    )
}

export default Login;
