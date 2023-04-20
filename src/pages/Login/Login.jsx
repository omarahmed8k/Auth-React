import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./Login.scss"

export default function Login() {
    const navigate = useNavigate();
    return (
        <div className="container">
            <div className='login-page'>
                <h1 className="title">Login</h1>
                <form className='col-1-columns'>
                    <div className='input-container'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className='input-container'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>
                    <button className='main-btn' type="submit" onClick={(e) => { e.preventDefault(); localStorage.setItem('access', 'true'); navigate(0) }}>Login</button >
                    <Link to='/register' className="second-btn">Sign Up</Link>
                </form>
            </div>
        </div>
    )
}
