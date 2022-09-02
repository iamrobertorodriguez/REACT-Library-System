import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import '../styles/SignUp.css';
import {setTheme} from '../styles/setTheme';
import { getBookThunk } from '../redux/actions';

const SignUp = () => {

    const dispatch = useDispatch();
    const book = useSelector(state => state.book)
    const [isPassword, setIsPassword] = useState(true)

    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        setTheme()
        dispatch(getBookThunk(Math.floor(Math.random() * (50 - 1 + 1) + 1)))
    }, [])

    const handleSignIn = (e) => {
        e.preventDefault()
        const data = {
            username,
            firstName,
            lastName,
            phone,
            address,
            email,
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
                <form onSubmit={handleSignIn}>
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
                            type="text" 
                            className="input"
                            onChange={(e)=>{setFirstName(e.target.value)}}
                            value={firstName}
                        />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>First Name</label>
                    </div>
                    <div className="group">
                        <input
                            required 
                            type="text" 
                            className="input"
                            onChange={(e)=>{setLastName(e.target.value)}}
                            value={lastName}
                        />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Last Name</label>
                    </div>
                    <div className="group">
                        <input
                            required 
                            type="text" 
                            className="input"
                            onChange={(e)=>{setPhone(e.target.value)}}
                            value={phone}
                        />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Phone Number</label>
                    </div>
                    <div className="group">
                        <input
                            required 
                            type="text" 
                            className="input"
                            onChange={(e)=>{setAddress(e.target.value)}}
                            value={address}
                        />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Address</label>
                    </div>
                    <div className="group">
                        <input
                            required 
                            type="email" 
                            className="input"
                            onChange={(e)=>{setEmail(e.target.value)}}
                            value={email}
                        />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Email</label>
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
                        <span className="text">SIGN UP NOW</span>
                        <span className="bottom-key-1"></span>
                        <span className="bottom-key-2"></span>
                    </button>
                </form>
            </div>            
        </div>
    );
};

export default SignUp;