import React, { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
import '../styles/NavBar.css';
import {SearchBar} from '../Components';
import { getUserThunk, refreshTokenThunk } from '../redux/actions';

const NavBar = () => {
    
    const [searchbarState, setSearchbarState] = useState(false)
    const dispatch = useDispatch()
    const changeCheckboxState = (state) => {
        document.getElementById("menu-checkbox").checked = state;
    }
    const refreshToken = localStorage.getItem('refresh');

    useEffect(() => {
        if (refreshToken) {
            dispatch(getUserThunk())
            dispatch(refreshTokenThunk())
        }
    }, [])

    return (
        <nav className="menu-container">
            <input 
                type="checkbox" 
                id='menu-checkbox'
                aria-label="Toggle menu" 
            />
            <span></span>
            <span></span>
            <span></span>

            <a href="#" className="menu-logo">
                <i className="fa-solid fa-book-open"></i>
            </a>

            <div className="menu">
                <ul>
                    <li
                        onClick={() => {
                            changeCheckboxState(false)
                        }}
                    >
                        <a href="#">
                            Home
                        </a>
                    </li>
                    <li
                        onClick={() => {
                            changeCheckboxState(false)
                        }}
                    >
                        <a href="#/categories">
                            Categories
                        </a>
                    </li>
                    <li
                        onClick={() => {
                            changeCheckboxState(false)
                            setSearchbarState(!searchbarState)
                        }}
                    >
                        <a>
                            Search
                        </a>
                    </li>
                </ul>
                <ul>
                    {
                        refreshToken ?
                            <li
                                onClick={() => {
                                    changeCheckboxState(false)
                                }}
                            >
                                <a href="#/sign-up">
                                    {localStorage.getItem('user')}
                                </a>
                            </li> :
                                <>
                                    <li
                                        onClick={() => {
                                            changeCheckboxState(false)
                                        }}
                                    >
                                        <a href="#/sign-up">
                                            Sign-up
                                        </a>
                                    </li>
                                    <li
                                        onClick={() => {
                                            changeCheckboxState(false)
                                        }}
                                    >
                                        <a href="#/login">
                                            Login
                                        </a>
                                    </li>
                                </>
                    }
                </ul>
            </div>
            <SearchBar searchbarState={searchbarState} setSearchbarState={setSearchbarState}/>
        </nav>
    );
};

export default NavBar;