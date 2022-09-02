import React, { useEffect, useState } from 'react';
import '../styles/ItemDetails.css'
import {CatalogItem} from '../Components'
import {useParams, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getBookThunk } from '../redux/actions';


const ItemDetails = () => {

    const {id} = useParams()
    const dispatch = useDispatch(  );
    const navigate = useNavigate(  );
    const book = useSelector(state => state.book)
    const [availableItems, setAvaliableItems] = useState([])
    const [description, setDescription] = useState('')
    const [descriptionLimit, setDescriptionLimit] = useState(800)
    const [category, setCategory] = useState({})
    const [location, setLocation] = useState({})
    const books = useSelector(state => state.books)

    useEffect(() => {
        dispatch(getBookThunk(
            id,
            setAvaliableItems,
            setDescription,
            setCategory,
            setLocation
        ))
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [id])

    return (
        <div className='itemdetails-screen'>
            <div className='item-wrapper'>
                <div className='item-image'>
                    <img src={book.image} alt={book.title} />
                </div>
                <div className='item-info'>
                    <div className="info">
                        <h1>{book.title}</h1>
                        <p
                            className='author'
                            onClick={(  ) => {
                                window.open(`https://www.google.com/search?q=${book.author.replace(' ', '+')}`, '_blank').focus();
                            }}
                        >
                            {book.author}
                        </p>
                        <p>{book.year}</p>
                    </div>
                    <p
                        onClick={()=>{
                            navigate(`/categories/${category.id}`)
                        }}
                    >
                        {category.name}
                    </p>
                    <div className='description'>
                        {
                            description.length > descriptionLimit ?
                                <p>
                                    {`${description.slice(0, 800)} `}
                                    <b
                                        onClick={(  ) => {
                                            setDescriptionLimit(10000)
                                        }}
                                    >
                                        ...read more
                                    </b>
                                </p> :
                                <p>{description}</p>
                        }
                    </div>
                    <div className='rent'>
                        <p>{
                            availableItems.length !== 0 ?
                                `There are ${availableItems.length} copies of this book available at the moment.` :
                                    'No copies of this book available at the moment, check back in a few days'
                        }</p>                        
                        <button 
                            className="button" 
                            style={{verticalAlign: "middle"}}
                        >
                            <span>Rent this book</span>
                        </button>
                        <p>{`You can look for this book in the store on shelf ${location.location}.`}</p>
                    </div>
                </div>
            </div>
            <h3>More from {category.name}.</h3>
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

export default ItemDetails;