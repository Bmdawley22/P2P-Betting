import React, { useState } from "react"
import { Link } from 'react-router-dom';


const Signup = () => {
    const [user, addUser] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(user);
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <Link to='/home'>Home</Link>
            <Link to='/login'>Log In</Link>
            <form onSubmit={handleSubmit}>
                <label>Username: </label>
                <input 
                    type='text' 
                    name='username' 
                    value={user.username} 
                    onChange={(e) => addUser({...user, username: e.target.value})}
                    >
                </input>
                <label>Email: </label>
                <input 
                    type='text' 
                    name='email' 
                    value={user.email} 
                    onChange={(e) => addUser({...user, email: e.target.value})}
                    >
                </input>
                <label>Password: </label>
                <input 
                    type='password' 
                    name='password' 
                    required
                    value={user.password} 
                    onChange={(e) => addUser({...user, password: e.target.value})}
                    >
                </input>
                <label>Signup!</label>
                <input type='submit'></input>
            </form>
        </div>
    )
}

export default Signup