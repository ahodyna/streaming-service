import React, { useState } from 'react';

export const AuthPage = () => {
    
    const [form, setForm] = useState({
        email: '', password: ''
    })

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    return (
        <div>
            <h2>Authorization</h2>
            <input 
            placeholder='Enter email'
            id='email'
            type='text'
            name='email'
            onChange = {changeHandler}
            />
             <input 
            placeholder='Enter password'
            id='password'
            type='password'
            name='password'       
            onChange = {changeHandler}
            />
            <div>
                <button>Login</button>
                <button>Register</button>
            </div>
            
        </div>
    )
};

export default AuthPage;
