import React, { useState } from 'react';
import '../styles/SearchBar.css'
import {useNavigate} from 'react-router-dom'

const SearchBar = ({searchbarState, setSearchbarState}) => {

    const [searchValue, setSearchValue] = useState('')
    const navigate = useNavigate()

    const handleSubmit = ( e ) => {
        e.preventDefault()
        const slug = 
            searchValue
                .replaceAll('á', 'a')
                .replaceAll('é', 'e')
                .replaceAll('í', 'i')
                .replaceAll('ó', 'o')
                .replaceAll('ú', 'u')
                .split(' ')
                .join('+')

        navigate(`/search/${slug}/`)
        setSearchbarState(false)
        setSearchValue('')
    }

    return (
        <div className={searchbarState ? 'searchbar-container active' : 'searchbar-container'}>
            <div id="cover">
                <form onSubmit={handleSubmit}>
                    <div className="tb">
                        <div className="td">
                            <input 
                                value={searchValue}
                                onChange={(e)=>{setSearchValue(e.target.value)}}
                                type="text" 
                                placeholder="Search" 
                                required
                            />
                        </div>
                        <div className="td" id="s-cover">
                            <button type="submit">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <i onClick={()=>{setSearchbarState(false)}} className="fa-solid fa-xmark"></i>
        </div>
    );
};

export default SearchBar;