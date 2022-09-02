import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import '../styles/CatalogItem.css'
import {setTheme} from '../styles/setTheme'

const CatalogItem = ({item}) => {

    const [title, setTitle] = useState(item.title)
    const navigate = useNavigate();

    useEffect((  ) => {
        if (title.length > 32) {
            setTitle(`${item.title.slice(0, 32)}...`)
        }
    }, [])


    return (
        <li
            className='catalog-item'
            title={item.title}
            onClick={(  ) => {
                navigate(`/item-details/${item.id}`)
                setTheme()
            }}
        >
            <img src={item.image} alt={item.title} />
            <p><b>{title}</b></p>
            <p>{item.author}</p>
            <p>{item.year}</p>
        </li>
    );
};

export default CatalogItem;