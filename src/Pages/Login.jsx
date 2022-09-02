import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setTheme} from '../styles/setTheme';
import { getBookThunk } from '../redux/actions';

const Login = () => {

    const dispatch = useDispatch();
    const book = useSelector(state => state.book)
    const [isPassword, setIsPassword] = useState(true)

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        setTheme()
        dispatch(getBookThunk(Math.floor(Math.random() * (50 - 1 + 1) + 1)))
    }, [])

    const handleLogin = (e) => {
        e.preventDefault()
        const data = {
            username,
            password
        }
        console.log(data)
    }

    return (
        <div className='signup-screen'>
            <div className="signup">
                <div className="random-book">
                    <img src={book.image} alt="" />
                </div>
                <form id='login' onSubmit={handleLogin}>
                    <div className="group">
                        <input
                            required 
                            type="text" 
                            className="input"
                            onChange={(e)=>{setUsername(e.target.value.toLowerCase())}}
                            value={username}
                        />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Username</label>
                    </div>
                    <div className="group">
                        <input 
                            required
                            type={isPassword ? 'password' : 'text'} 
                            className="input"
                            onChange={(e)=>{setPassword(e.target.value)}}
                            value={password}
                        />
                        <button
                            type='button'
                            onClick={() => {
                                setIsPassword(!isPassword)
                            }}
                        >
                            {
                                isPassword ?
                                    <i className="fa-solid fa-eye"></i> :
                                        <i className="fa-solid fa-eye-slash"></i>
                            }
                        </button>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Password</label>
                    </div>
                    <button
                        type='submit'
                        className="fancy"
                    >
                        <span className="top-key"></span>
                        <span className="text">LOGIN</span>
                        <span className="bottom-key-1"></span>
                        <span className="bottom-key-2"></span>
                    </button>
                </form>
            </div>            
        </div>
    );
};

export default Login;