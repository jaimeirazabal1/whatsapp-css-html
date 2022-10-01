import React,{useState} from 'react'
import "./Login.css";

import { useSelector, useDispatch } from 'react-redux'
import {login} from '../../reducers/logged'

export const Login = () => {

    const [user,setUser] = useState({
        username:'',
        password:''
    })
    const dispatch = useDispatch()

    const handleLogin = () => {
        console.log('handleLogin')
        console.log('user',user);
        dispatch(login(user))
    }

    return (
        <div id="app__login_wrap">
            <div id="app__login">
                <h1>
                    Whatsapp Application
                </h1>
                <div>
                    <label>Username:</label>
                    <input type="text" onChange={(e)=>setUser({...user,username:e.target.value})} placeholder="Username. Ej: beatman or beatman@beat.com"/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" onChange={(e)=>setUser({...user,password:e.target.value})} placeholder="Enter a secure password"/>
                </div>
                <button onClick={handleLogin}>
                    Login
                </button>
            </div>
        </div>
    )
}
