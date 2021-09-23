import React, { useState } from 'react';
import { useHttp } from '../hooks/http.hook';

export const AuthPage = () => {
    const { loading, error, request } = useHttp()

    const [form, setForm] = useState({
        email: '', password: ''
    });

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            console.log('data', data)
        } catch (e) {

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
                <button disabled={loading}>Login</button>
                <button onClick={registerHandler} disabled={loading}>Register</button>
            </div>

        </div>
    )
};

export default AuthPage;
