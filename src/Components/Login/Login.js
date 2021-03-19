import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from "../../App";
import firebaseConfig from './firebase.config';
import './Login.css';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {

    const [option, setOption] = useState('login');
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    })

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    const provider = new firebase.auth.GoogleAuthProvider();

    const handleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, email } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email
                }
                setUser(signedInUser);
                setLoggedInUser(signedInUser);
                history.replace(from);
            })
            .catch(err => {
                console.log(err);
            })
    }
    const handleBlur = (e) => {
        let isFormValid = true;
        if (e.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
            const newUserInfo = { ...user };
            newUserInfo.error = isFormValid ? "" : "Email invalid";
            setUser(newUserInfo)
        }
        if (option === 'signup' && e.target.name === 'password') {
            isFormValid = e.target.value.length > 5;
            const newUserInfo = { ...user };
            newUserInfo.error = e.target.value.length > 5 ? "" : "Password must be greater than 6 digit"
            setUser(newUserInfo)
        }
        if (e.target.name === 'confirmPassword') {
            const newUserInfo = { ...user }
            isFormValid = e.target.value === newUserInfo.password;
            console.log(isFormValid, e.target.value, newUserInfo.password);
            newUserInfo.error = e.target.value === newUserInfo.password ? "" : "Password didn't match";
            setUser(newUserInfo)
        }
        if (isFormValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            newUserInfo.error = "";
            setUser(newUserInfo)
        }
    }


    const handleSubmit = (e) => {
        if (option === 'signup' && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    updateUserInfo(user.name);
                })
                .catch(err => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = err.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo)
                })
        }
        if (option === 'login' && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const { displayName } = res.user;
                    const newUserInfo = { ...user }
                    newUserInfo.error = "";
                    newUserInfo.success = true;
                    newUserInfo.isSignedIn = true;
                    newUserInfo.name = displayName;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                })
                .catch(err => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = err.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo)
                })
        }
        e.preventDefault();
    }

    const updateUserInfo = name => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name
        }).then((res) => {
            // Update successful.
        }).catch((error) => {
            // An error happened.
        });
    }


    return (
        <div className="d-flex flex-column justify-content-center align-items-center mt-5" >
            <div className="custom-form" >
                <form onSubmit={handleSubmit} className="container">
                    <h4 className="mt-2" >{option === 'login' ? 'Login' : 'Create an account'}</h4>
                    {option === 'signup' && <input onBlur={handleBlur} name="name" type="text" className="input" placeholder="Name" />}
                    <input onBlur={handleBlur} type="email" name="email" required className="input" placeholder="Email" />
                    <input onChange={handleBlur} type="password" name="password" required className="input" placeholder="Password" />
                    {option === 'signup' && <input onChange={handleBlur} type="password" name="confirmPassword" required className="input" placeholder="Confirm Password" />}
                    {option === 'login' && <div className="d-flex justify-content-between align-items-baseline" >
                        <div>
                            <input type="checkbox" id="exampleCheck1" />
                            <label className="ml-2 mt-3" htmlFor="exampleCheck1">Remember me</label>
                        </div>
                        <Link>
                            <p className="text-danger" >Forgot Password</p>
                        </Link>
                    </div>}
                    <button type="Submit" className="btn btn-primary btn-block mt-3">{option === 'login' ? "Login" : "Create an account"}</button>
                    <div className="d-flex justify-content-center align-items-baseline" >
                        <p className="text-center mt-3 mr-2" >{option === 'login' ? "Don't have an account? " : "Already have an account? "} </p>
                        <Link onClick={() => option === 'login' ? setOption('signup') : setOption('login')} >{option === 'login' ? "Create an account" : "Login"}</Link>
                    </div>
                </form>
            </div>
            <p>or</p>
            <button onClick={handleSignIn} type="button" className="btn btn-outline-secondary">Continue with Google</button>
            <p style={{ color: "red" }} >{user.error}</p>
            {user.success && <p style={{ color: "green" }} >User {option === 'login' ? "logged In" : "created"} successfully</p>}
        </div>
    );
};

export default Login;