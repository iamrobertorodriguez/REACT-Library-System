import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {searchBooksThunk} from '../redux/actions';
import {CatalogItem} from '../Components'
import '../styles/Search.css';
import {setTheme} from '../styles/setTheme'


const Search = () => {

    const {slug} = useParams();
    const dispatch = useDispatch();
    const books = useSelector(state => state.books);

    useEffect(() => {
        setTheme()
        dispatch(searchBooksThunk(slug))
    }, [slug])

    return (
        <div className='search-screen'>
            <h2><span>{books.length} results for:</span> {slug.replaceAll('+', ' ')}</h2>            
            <ul className='items-wrapper'>
                {
                    books.length >= 1 ?
                    <>
                        {
                            books.map((item) => (
                                <CatalogItem key={item.id} item={item}/>
                            ))
                        }
                    </> : <div className="not-found"></div>
                }
            </ul>
        </div>
    );
};

export default Search;