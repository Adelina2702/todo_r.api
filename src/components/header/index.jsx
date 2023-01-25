import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Admin from '../../img/admin.png'
import LogOut from '../../img/logout.png'
import Burger from '../../img/burger.png'
import './header.scss'

const Header = () => {
    const [toggleSwitch, setToggleSwitch] = useState(false);
    const user = localStorage.getItem('accessToken')
    // const refreshToken = localStorage.getItem('refreshToken')

    const navigate = useNavigate()

    const handleLogOut = () => {
        localStorage.clear()
        setToggleSwitch(false)
        navigate('/')
    }

    return (
        <div className={toggleSwitch ? 'nav active' : "nav"}>
        <nav className='header_container'>
        <div className='navbar'>
                TODO API
        </div>
        {
        toggleSwitch &&
        <div className='header__btn'>
            <div className="header__btn_admin"
                                onClick={() => {
                                navigate('/admin')
                                setToggleSwitch(false)
                                }}
            >
        <img
                    className='admin__btn'
        src={Admin} alt="" />
        <p>Admin</p>
            </div>
        <div className="header__btn_logout"
                onClick={handleLogOut}
        >
        <img
        className='admin__btn'
        src={LogOut} alt="" />
        <p>Log out</p>
            </div>
        </div>
    }
            {
            user ? (
            <div className='header__burger'>
                <img className='admin__btn' onClick={() => setToggleSwitch(prev => !prev)} src={Burger} alt="" />
            </div>
            ) : null 
            }

            </nav>
        </div>
    );
}

export default Header;
