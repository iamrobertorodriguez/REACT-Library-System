import React, { useEffect, useState } from 'react';
import '../styles/NavBar.css'
import {SearchBar} from '../Components'

const NavBar = () => {
    
    const [searchbarState, setSearchbarState] = useState(false)
    const changeCheckboxState = (state) => {
        document.getElementById("menu-checkbox").checked = state;
    }

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
                </ul>
            </div>
            <SearchBar searchbarState={searchbarState} setSearchbarState={setSearchbarState}/>
        </nav>
    );
};

export default NavBar;