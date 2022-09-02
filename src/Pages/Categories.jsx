import React, { useEffect } from 'react';
import '../styles/Categories.css'
import {CategoriesItem} from '../Components'
import { getCategoriesThunk } from '../redux/actions';
import {useDispatch, useSelector} from 'react-redux'
import {randomizeBooks} from '../Pages/Home'
import { setTheme } from '../styles/setTheme'

const Categories = () => {

    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories)

    useEffect(() => {
        setTheme()
        dispatch(getCategoriesThunk())
    }, [])

    return (
        <div className='categories-screen'>
            <ul className='items-wrapper'>
            {
                randomizeBooks(categories).map((item) => (
                    <CategoriesItem key={item.id} item={item}/>
                ))
            }
            </ul>
        </div>
    );
};

export default Categories;