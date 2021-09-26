import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hook';

export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const { loading, request, error, clearError } = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    });

    useEffect(() => {
        clearError()
    }, [error, clearError])


    const registerHandler = async () => {
        try {
            await request('/api/auth/register', 'POST', { ...form })
            loginHandler()
        } catch (e) {
            alert(e)
        }
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', { ...form })
            auth.login(data.token, data.userId)
        } catch (e) {
            alert(e)
        }
    }

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    return (
        <div>
            <h2>Authorization</h2>
            <input
                placeholder='Enter email'
                id='email'
                type='text'
                name='email'
                onChange={changeHandler}
            />
            <input
                placeholder='Enter password'
                id='password'
                type='password'
                name='password'
                onChange={changeHandler}
            />
            <div>
                <button onClick={loginHandler} disabled={loading}>Login</button>
                <button onClick={registerHandler} disabled={loading}>Register</button>
                
            </div>

        </div>
    )
};

export default AuthPage;
