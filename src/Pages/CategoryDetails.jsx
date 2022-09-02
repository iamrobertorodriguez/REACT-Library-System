import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCategoryThunk } from '../redux/actions';
import { CatalogItem } from '../Components'
import '../styles/CategoryDetails.css'
import { setTheme } from '../styles/setTheme'

const CategoryDetails = () => {

    const {id} = useParams()
    const dispatch = useDispatch()
    const category = useSelector(state => state.category)
    const books = useSelector(state => state.books)

    useEffect(()=>{
        setTheme()
        dispatch(getCategoryThunk(id))
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [id])

    return (
        <div className='category-screen'>
            <div 
                className='item-wrapper'
                style={{backgroundImage: `url(${category.image})`}}
            >
                <div className='item-image'>
                </div>
                <div className='item-info'>
                    <h1>{category.name}</h1>
                    <p>{category.description}</p>
                </div>
            </div>
            <h3>Here are some copies of {category.name}.</h3>
            <ul className='items-wrapper'>
                {
                    books.map((item) => (
                        <CatalogItem key={item.id} item={item}/>
                    ))
                }
            </ul>
        </div>
    );
};

export default CategoryDetails;