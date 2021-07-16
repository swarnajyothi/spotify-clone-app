import React from 'react'
import './Login.css';
import logo from '../images/logo.png'
import { loginUrl } from './spotify';
function Login() {
    return (
        <div className="login">
            <img src={logo} alt="spotify logo"/>
            <a href={loginUrl}>Login with Spotify</a>
        </div>
    )
}

export default Login
