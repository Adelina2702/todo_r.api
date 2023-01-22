import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API } from '../../Api';
import './adminPage.scss'
import jwt_decode from "jwt-decode";

const AdminPage = () => {
    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ date, setDate ] = useState('')

    const accessToken = localStorage.getItem('accessToken')
    const decode = jwt_decode(accessToken)
    const user = decode.user_id

    const navigate = useNavigate()

    const handlePost = () => {
        API.postTodo(accessToken, {title, description, date, user})
        setTimeout(() => {
            navigate('/')
        }, 2000)
    }

    return (
<div className='box'>
            <h3 className='box_text'>Admin</h3>
            <hr />
            <form>
                <input
                type="text"
                placeholder='Title *'
                required
                onChange={e => setTitle(e.target.value)}
                />

                <input
                type="text"
                placeholder='Description *'
                required
                onChange={e => setDescription(e.target.value)}
                />
                <input type="date" onChange={e => setDate(e.target.value)} />
                <div className="box_btns">
                <button className="box_btn1" 
                onClick={e => {
                    e.preventDefault()
                    handlePost()
                } 
                }>Add ToDo</button>
                <div className='box_btn__register'>
                <Link to='/'>
                <button >Home</button>
                </Link>
                </div>
                </div>
                </form>
        </div>
    );
}

export default AdminPage;
