import React from "react"
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div>
            <h1>Log In</h1>
            <Link to='/home'>Home</Link>
            <Link to='/signup'>Sign Up</Link>
        </div>
    )
}

export default Login