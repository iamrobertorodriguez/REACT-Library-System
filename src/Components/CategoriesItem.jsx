import React from 'react';
import '../styles/CategoriesItem.css'
import {setTheme} from '../styles/setTheme'
import {useNavigate} from 'react-router-dom';

const CategoriesItem = ({item}) => {

    const navigate = useNavigate();

    return (
        <div 
            id='categories-item'
            style={{backgroundImage: `url(${item.image})`}}
            onClick={(  ) => {
                navigate(`/categories/${item.id}`)
                setTheme()
            }}
        >
            <div></div>
            <h1>{item.name}</h1>
        </div>
    );
};

export default CategoriesItem;