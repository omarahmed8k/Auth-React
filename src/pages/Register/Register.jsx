import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className='login-page'>
        <h1 className="title">Sign Up</h1>
        <form className='col-1-columns'>
          <div className='input-container'>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className='input-container'>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className='input-container'>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <button className='main-btn' type="submit" onClick={(e) => { e.preventDefault(); localStorage.setItem('access', 'true'); navigate(0) }}>Sign Up</button >
          <Link to='/login' className="second-btn">Login</Link>
        </form>
      </div>
    </div>
  )
}
