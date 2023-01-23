import React, { useState } from 'react';
import { API } from '../../Api';
import './card.scss'
import Trash from '../../img/trash.png';
import Edit from '../../img/edit.png';
// import jwt_decode from "jwt-decode";

const Card = ({title, description, date, id, get}) =>  {
    const [editActive, setEditActive] = useState(false)
    const [newTitle, setNewTitle] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const [newDate, setNewDate] = useState('')
    
    
    const accessToken = localStorage.getItem('accessToken')
    // const decode = jwt_decode(accessToken)
    // const user = decode.user_id
    
    const handleEdit = (id, ) => {
        API.editTodo(id, accessToken,{
        title: newTitle.length === 0 ? title : newTitle,
        description: newDescription.length === 0 ? description : newDescription,
        date: newDate.length === 0 ? date : newDate,
        }).then(res => res && get())
    }
    
    const handleDelete = (id) => {
        API.deleteTodo(id,accessToken).then(res => res && get())
    }
    
    return (
        <div className='card'>
        <div className='card__description'>
            <p className='card__date'>
                <span>{date}</span>
            </p>
            <h4>{title}</h4>
            <p className='card__text'>
            {description}
            </p>
            {
            editActive &&
            <div className='edit__inputs'>
                <input type="text" placeholder='title' onChange={e => setNewTitle(e.target.value)}/>
                <input type="text" placeholder='description' onChange={e => setNewDescription(e.target.value)}/>
                <input type="date" placeholder='date' onChange={e => setNewDate(e.target.value)}/>

                <div className='change_btn' >
                <button onClick={() => {
                    handleEdit(id)
                    setEditActive(false)
                }} className="change_btn__edit">Edit</button>
                </div>
            </div>
            }
        </div>
        <div className='card__btn'>
            <img onClick={() => handleDelete(id)} className='delete__btn' src={Trash} alt="" />
            <img onClick={() => setEditActive(prev => !prev)} className='edit__btn' src={Edit} alt="" />
        </div>
        </div>
    );
}

export default Card;