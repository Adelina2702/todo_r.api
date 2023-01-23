import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API } from '../../../Api';
import './Login.scss'


const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')


    const handleLogin = () => {
        if(userName.length !== 0 && password.length !== 0){
            API.login( userName, password)
            .then(res => {
                localStorage.setItem('accessToken', res.data.access)
                localStorage.setItem('refresh', res.data.refresh)
                localStorage.setItem('users' , JSON.stringify(res.data.user))
                localStorage.setItem('isActivated' , res.data.users.isActivated)
                localStorage.setItem('error', res.data.message)
        })
        }
    }
    return (
        <div className='box'>
            <h3 className='box_text'>Authorization</h3>
            <hr />
            <form>
                <input
                type="text"
                placeholder="Name *"
                onChange={e => setUserName(e.target.value)}
                required
                />

                <input
                name="password"
                type="password"
                placeholder="Password *"
                defaultValue={password}
                onChange={e => setPassword(e.target.value)}
                required
                />
                <div className="box_btns">
                    <Link to='/homepage'>
                <button className="box_btn1"
                onClick={
                handleLogin()
                }
                >Authorization</button>
                </Link>
                <div className='box_btn__register'>
                <Link to='/register'>
                <button >Create a new account</button>
                </Link>
                </div>
                </div>
                </form>
        </div>
    );
}

export default Login;
