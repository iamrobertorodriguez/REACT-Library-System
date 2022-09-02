import React from 'react';
import '../styles/Home.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CatalogItem } from '../Components';
import { getBooksThunk } from '../redux/actions';
import { setTheme } from '../styles/setTheme'

export const randomizeBooks = (array) => {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }     
    return array;
}
const Home = () => {

    const dispatch = useDispatch(  );
    const books = useSelector(state => state.books)

    useEffect((  ) => {
        setTheme()
        dispatch(getBooksThunk())
    }, [])


    return (
        <div className='home-screen'>
            <ul className='items-wrapper'>
                {
                    books.length >= 1 ?
                    <>
                        {
                            randomizeBooks(books).map((item) => (
                                <CatalogItem key={item.id} item={item}/>
                            ))
                        }
                    </> : <div className="not-found"></div>
                }
            </ul>
        </div>
    );
};

export default Home;