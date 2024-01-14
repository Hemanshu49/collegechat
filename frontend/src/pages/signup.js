import React , {useState ,useEffect}from "react";
import {Link  , useNavigate} from 'react-router-dom';
import {FaUser , FaLock} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import toast from 'react-hot-toast';
import axios from 'axios';


const Signup = () =>{
    const [name , setName] =useState();
    const [email, setEmail] =useState();
    const [password , setPassword] =useState();
    const [confrimpassword , setConfrimpassword] =useState();
    const [pic , setPic] = useState();
    const [ loading ,setLoading] =useState();
    const Navigate = useNavigate ();

    const submit =async() =>{
        setLoading(true);
        if(!name || !email || !password || !confrimpassword){
            return toast.error("Please fill out all fields");

            
        }
        if (password !== confrimpassword){
            return toast.error('Passwords do not match');
            
        }

        try {
            const config = {
                header : {
                    "Content-Type":"multipart/form-data",
                },
            };
            const {data} = await axios.post("/api/user" , {name , email , password ,pic } ,config);
            // console.log(data)

        localStorage.setItem ("userInfo" , JSON.stringify(data));

        setLoading(false);

        Navigate ("/chat")
        
        } catch (error) {
            console.log(error);
            toast.error("Error creating account");
            
            setLoading(false);
        }
        
    };
    return(
        <div className="wrapper">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" onChange={(e) => setName(e.target.value)}  required />
                    <FaUser  className="icon"/>
                </div>

                <div className="input-box">
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                    <MdOutlineEmail className="icon"/>
                </div>

                <div className="input-box">
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                    <FaLock  className="icon"/>
                </div>

                <div className="input-box">
                    <input type="password" placeholder="Confrim Password" onChange={(e) => setConfrimpassword(e.target.value)} required />
                    <FaLock  className="icon"/>
                </div>


                <button type="submit" onClick={submit}>Register</button>

                <div className="register-link">
                    <p>Have an Account? <Link to="/login">Login</Link></p>
                </div>
            </form>
        </div>
    )
}

export default Signup ;