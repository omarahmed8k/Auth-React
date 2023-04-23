import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth-slice';
import Loader from '../../components/Loader/Loader';
import authServices from '../../services/authServices';
import sweetAlerts from '../../helpers/sweetAlerts';

export default function Register() {
  const dispatch = useDispatch();
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
    if ((registerData.name && registerData.email && registerData.password) === '') {
      sweetAlerts.error('Please fill all the fields');
      return;
    } else if (registerData.password.length < 6) {
      sweetAlerts.error('Password must be at least 6 characters');
      return;
    }


    try {
      setLoading(true);
      const { data } = await authServices.register(registerData);
      setLoading(false);
      sweetAlerts.success('Register Success');
      dispatch(authActions.login(data))
      navigate('/');
    } catch (error) {
      setLoading(false);
      sweetAlerts.error(error.response.data.msg);
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
