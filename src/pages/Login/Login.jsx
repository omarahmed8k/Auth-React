import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import authServices from '../../services/authServices';
import Loader from '../../components/Loader/Loader';
import "./Login.scss"

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prev) => ({ ...prev, [name]: value }))
        console.log(loginData)
    }

    async function login() {
        setLoading(true);
        try {
            const data = await authServices.login(loginData);
            console.log(data)
            setLoading(false);
        } catch (error) {
            console.log(error)
            setLoading(false);
        }
        setLoading(false);
    }

    return (
        <>
            {loading && <Loader />}
            <div className="container">
                <div className='login-page'>
                    <h1 className="title">Login</h1>
                    <form className='col-1-columns'>
                        <div className='input-container'>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" onChange={handleChange} />
                        </div>
                        <div className='input-container'>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" onChange={handleChange} />
                        </div>
                        <button className='main-btn' type="button" onClick={(e) => { e.preventDefault; login(); }}>Login</button >
                        <Link to='/register' className="second-btn">Sign Up</Link>
                    </form>
                </div>
            </div>
        </>
    )
}
