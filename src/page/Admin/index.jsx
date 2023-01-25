import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API } from '../../Api';
import './adminPage.scss'
import jwt_decode from "jwt-decode";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'
// import { schema } from '../../schemas';

const schema = yup.object().shape({
    title: yup.string().min(3).matches(/^[A-Za-z ]*$/, 'Please enter valid title').max(55).required("Required"),
    description: yup.string().min(3).required('Required'),
    date: yup.number().required('Required')
})
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
            navigate('/homepage')
        }, 2000)
    }

    const {register, handleSubmit, formState: {errors}, }  = useForm({
        resolver: yupResolver(schema),
    })


    return (
<div className='box'>
            <h3 className='box_text'>Admin</h3>
            <hr />
            <form onSubmit={handleSubmit(handlePost)}>
                <input
                placeholder='Title *'
                type="text"
                name="title"
                {...register('title')}
                onChange={e => setTitle(e.target.value)}
                />
            <p className="title_text">{errors.title?.message}</p>
                <input
                type="text"
                placeholder='Description *'
                onChange={e => setDescription(e.target.value)}
                {...register('description')}
                />
                <p className="title_text">{errors.description?.message}</p>
                <input type="date" onChange={e => setDate(e.target.value)}
                {...register('date')}
                />
                <p className="title_text">{errors.date?.message}</p>
                <div className="box_btns">
                <button className="box_btn1" 
                type='submit'
                >Add ToDo</button>
                <div className='box_btn__register'>
                <Link to='/homepage'>
                <button >Home</button>
                </Link>
                </div>
                </div>
                </form>
        </div>
    );
}

export default AdminPage;
