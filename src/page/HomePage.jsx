import React, { useEffect, useState } from 'react';
import { API } from '../Api';
import Card from '../components/card';

const HomePage = () => {
    const [data, setData] = useState('')

    const accessToken = localStorage.getItem('accessToken')

    const getTodos = () => {
        API.getTodos(accessToken)
        .then(res => res.data && setData(res.data))  
    }

    useEffect(() => {
        getTodos()
    }, []);

    return (
        <div>
            <h6 className='count'>Count: {data.length}</h6>
            {data &&
            data.map((data,id) => (
                <Card  key={id} {...data} get={getTodos}/>
            ))}
        </div>
    );
}

export default HomePage;

