import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import authServices from '../../services/authServices';

export default function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  async function register() {
    try {
      setLoading(true);
      const data = await authServices.register(registerData);
      console.log(data)
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false);
    }
  }

  return (
    <>
      {loading && <Loader />}
      <div className="container">
        <div className='login-page'>
          <h1 className="title">Sign Up</h1>
          <form className='col-1-columns'>
            <div className='input-container'>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" onChange={handleChange} />
            </div>
            <div className='input-container'>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" onChange={handleChange} />
            </div>
            <div className='input-container'>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" onChange={handleChange} />
            </div>
            <button className='main-btn' type="submit" onClick={(e) => { e.preventDefault(); register() }}>Sign Up</button >
            <Link to='/login' className="second-btn">Login</Link>
          </form>
        </div>
      </div>
    </>
  )
}
