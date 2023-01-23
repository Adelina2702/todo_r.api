import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API } from '../../../Api';

const Register = () => {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [active, setActive] = useState(false)    

    const navigate = useNavigate()

    const handleRegister = () => {
        API.register(userName, email, password).then(response => { setActive(true)
        localStorage.setItem('users' , JSON.stringify(response.data.users))
        localStorage.setItem('isActivated' , response.data.users.isActivated)
    })
    .catch(err => {
        console.log(err.message);
    })
    }

    return (
        <div className='box'>
        <h3 className='box_text'>Registration</h3>
        <hr />
        <form>
        <input
            type="text"
            placeholder="Name *"
            onChange={e => setUserName(e.target.value)}
            required
            />
            <input
            className="box_item"
            name="email"
            type="email"
            placeholder="Email *"
            onChange={e => setEmail(e.target.value)}
            required
            />

            <input
            className="box_item"
            name="password"
            type="password"
            placeholder="Password *"
            onChange={e => setPassword(e.target.value)}
            required
            />
            <div className="box_btns">
                <Link to='/'>
            <button className="box_btn1" onClick={e => {e.preventDefault()
                handleRegister()}}>Registration</button>
                </Link>
                {
                    active ?
                    <p>An email has been sent to you with a link to activate your account.</p> :
                    null
                }
            <div className="box_btn__register">
            <Link to='/'>
            <button>Have already an account?</button>
            </Link>
            </div>
            </div>
            </form>
    </div>
    );
}

export default Register;
