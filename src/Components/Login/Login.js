import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center mt-5" >
            <div className="custom-form" >
                <div className="container">
                    <h4 className="mt-2" >Login</h4>
                    <input type="email" class="input" placeholder="Email" />
                    <input type="password" class="input" placeholder="Password" />
                    <div className="d-flex justify-content-between align-items-baseline" >
                        <div>
                            <input type="checkbox" id="exampleCheck1" />
                            <label className="ml-2 mt-3" for="exampleCheck1">Remember me</label>
                        </div>
                        <Link>
                            <p className="text-danger" >Forgot Password</p>
                        </Link>
                    </div>
                    <button type="button" className="btn btn-primary btn-block">Login</button>
                    <p className="text-center mt-3" >Don't have account? </p>
                    <Link to="/login/signup" >Create an account</Link>
                </div>
            </div>
            <p>or</p>
            <button type="button" className="btn btn-outline-secondary">Continue with Google</button>
        </div>
    );
};

export default Login;