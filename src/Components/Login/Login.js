import firebase from "firebase/app";
import "firebase/auth";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import firebaseConfig from './firebase.config';
import './Login.css';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {

    const [option, setOption] = useState('login');

    return (
        <div className="d-flex flex-column justify-content-center align-items-center mt-5" >
            <div className="custom-form" >
                <div className="container">
                    <h4 className="mt-2" >{option === 'login' ? 'Login' : 'Create an account'}</h4>
                    {option === 'signup' && <input type="text" class="input" placeholder="Name" />}
                    <input type="email" class="input" placeholder="Email" />
                    <input type="password" class="input" placeholder="Password" />
                    {option === 'signup' && <input type="password" class="input" placeholder="Confirm Password" />}
                    {option === 'login' && <div className="d-flex justify-content-between align-items-baseline" >
                        <div>
                            <input type="checkbox" id="exampleCheck1" />
                            <label className="ml-2 mt-3" for="exampleCheck1">Remember me</label>
                        </div>
                        <Link>
                            <p className="text-danger" >Forgot Password</p>
                        </Link>
                    </div>}
                    <button type="button" className="btn btn-primary btn-block mt-3">{option === 'login' ? "Login" : "Create an account"}</button>
                    <div className="d-flex justify-content-center align-items-baseline" >
                        <p className="text-center mt-3 mr-2" >{option === 'login' ? "Don't have an account? " : "Already have an account? "} </p>
                        <Link onClick={() => option === 'login' ? setOption('signup') : setOption('login')} >{option === 'login' ? "Create an account" : "Login"}</Link>
                    </div>
                </div>
            </div>
            <p>or</p>
            <button type="button" className="btn btn-outline-secondary">Continue with Google</button>
        </div>
    );
};

export default Login;