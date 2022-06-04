import React from "react"
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <h1>Welcome to P2P Betting</h1>
            <Link to='/login'>Log In</Link>
            <Link to='/signup'>Sign Up</Link>
        </div>
    )
}

export default Home