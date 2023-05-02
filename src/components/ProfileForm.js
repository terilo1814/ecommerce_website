import { useContext } from 'react'
import './ProfileForm.css'
import React, { useRef } from 'react'
import { CartContext } from './CartContext'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'
import { Navbar } from './Navbar'


export const ProfileForm = () => {
    const { contextValue } = useContext(CartContext)
    const newPasswordInputRef = useRef('')

    const history = useHistory()

    const submitHandler = async (e) => {
        e.preventDefault()

        const enteredNewPassword = newPasswordInputRef.current.value

        try {
            // Send a request to Firebase Authentication API to update the user's password
            console.log(contextValue.token);
            const response = await fetch(
                `https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCE9Ri0f_1n-d_Z-CFFDTIrtb1pk1NRfJQ`,
                {
                    method: 'POST',
                    body: JSON.stringify({
                        idToken: contextValue.token,
                        password: enteredNewPassword,
                        returnSecureToken: false,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )

            if (!response.ok) {
                throw new Error('Failed to update password')
            }

            // Redirect the user to the homepage after successfully updating the password
            history.replace('/')
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <>
            <Navbar showCartButton={false} />
            <form onSubmit={submitHandler}>
                <div className='container'>
                    <div className='new-pass'>
                        <label htmlFor='new-password'>New Password</label>
                        <input type='password' minLength='8' ref={newPasswordInputRef} required />
                    </div>
                    <button className='btn-pass'>Change Password</button>
                </div>
            </form>
        </>
    )
}
