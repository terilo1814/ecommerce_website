import { useState } from 'react';
import classes from './AuthForm.module.css';
import { Navbar } from '../components/Navbar';
import { useRef } from 'react';
import { CartContext } from '../components/CartContext';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';

const AuthForm = () => {

    const { contextValue } = useContext(CartContext)


    const emailInputRef = useRef('')
    const passwordInputRef = useRef('')

    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false)

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    const history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        setIsLoading(true)
        let url
        if (isLogin) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCE9Ri0f_1n-d_Z-CFFDTIrtb1pk1NRfJQ'
        }
        else {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCE9Ri0f_1n-d_Z-CFFDTIrtb1pk1NRfJQ'
        }
        fetch(
            url,
            {
                method: 'POST',
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                setIsLoading(false)
                if (res.ok) {
                    return res.json()
                } else {
                    return res.json().then(data => {
                        let errorMessage = 'Authentication failed'
                        // if (data && data.error && data.error.message) {
                        //     errorMessage = data.error.message
                        // }
                        // alert(errorMessage)
                        throw new Error(errorMessage)
                    })
                }
            }).then(data => {
                contextValue.login(data)
                history.replace('/')

            }).catch((err) => {
                alert(err.message)
            })
    }

    return (
        <>
          
            <section className={classes.auth}>
                <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
                <form onSubmit={submitHandler}>
                    <div className={classes.control}>
                        <label htmlFor='email'>Your Email</label>
                        <input type='email' id='email' required ref={emailInputRef} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='password'>Your Password</label>
                        <input
                            type='password'
                            id='password'
                            required
                            ref={passwordInputRef}
                        />
                    </div>
                    <div className={classes.actions}>
                        {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
                        {isLoading && <p>Sending request...</p>}
                        <button
                            type='button'
                            className={classes.toggle}
                            onClick={switchAuthModeHandler}
                        >
                            {isLogin ? 'Create new account' : 'Login with existing account'}
                        </button>
                        <button
                            type='button'
                            className={classes.toggle}>
                            <NavLink to="./forgotPassword" activeClassName="link">
                                {isLogin ? 'Forgot Password' : ''}
                            </NavLink>
                        </button>

                    </div>
                </form>
            </section >
        </>
    );
}

export default AuthForm;
