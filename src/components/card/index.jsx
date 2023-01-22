import React, { useState } from 'react';
import {AiFillCheckCircle, AiTwotoneDelete} from "react-icons/ai";
import {FaEdit} from "react-icons/fa";
import { API } from '../../Api';
import './card.scss'

const Card = ({title, description, date, id, completed, edited ,get}) =>  {
    const [editActive, setEditActive] = useState(false)
    const [newTitle, setNewTitle] = useState('')
    const [newDescription, setNewDescription] = useState('')
    
    const accessToken = localStorage.getItem('accessToken')
    
    const handleEdit = (id) => {
        API.editTodo(id, accessToken, {
        title: newTitle.length === 0 ? title : newTitle,
        description: newDescription.length === 0 ? description : newDescription,
        }).then(r => r && get())
    }
    
      const handleComplete = (id) => {
        API.getTodo.then(res => console.log("qw",res.data))
      }
    
    const handleDelete = (id) => {
        API.deleteTodo(id,accessToken).then(r => r && get())
    }
    
    return (
        <div className='card'>
        <div className='card__description'>
            <div className='card__header'>
            <p className='card__date'>
                <span>{date}</span>
                <span>Edited: {edited?.date?.slice(0, 10)}</span>
            </p>
            
            <h3>{title}</h3>
            {
                completed &&
                <AiFillCheckCircle/>
            }
            </div>
            <p className='card__text'>
            {description}
            </p>
            {
            editActive &&
            <div className='edit__inputs'>
                <input type="text" placeholder='title' onChange={e => setNewTitle(e.target.value)}/>
                <input type="text" placeholder='description' onChange={e => setNewDescription(e.target.value)}/>
                <div className='change_btn' >
                <button onClick={() => {
                    handleEdit(id)
                    setEditActive(false)
                }}>Edit</button>
                </div>
            </div>
            }
        </div>
        <div className='card__btn'>
            <button
            className='delete__btn'
            onClick={() => handleDelete(id)}
            >
            <AiTwotoneDelete/>
            </button>
            <button
            className='edit__btn'
            onClick={() => setEditActive(prev => !prev)}
            >
            <FaEdit/>
            </button>
        </div>
        </div>
    );
}

export default Card;