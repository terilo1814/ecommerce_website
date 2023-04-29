import { useRef } from 'react';
import React from 'react'
import './Contact.css'
import { Navbar } from './Navbar';

export const Contact = () => {
    const name = useRef('');
    const email = useRef('');
    const phone = useRef('');

    async function submitHandler(e) {
        e.preventDefault()

        const products = {
            name: name.current.value,
            email: email.current.value,
            phone: phone.current.value
        }

        const response = await fetch('https://react-http-6d731-default-rtdb.firebaseio.com/products.json', {
            method: 'POST',
            body: JSON.stringify(products),
            headers: {
                'CONTENT-TYPE': 'application/json'
            }
        })
        const data = await response.json()
    }




    return (
        <>
            <Navbar showCartButton={false} />
            <form>
                <div className='container'>
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" className="form-control" id="name" ref={name} required />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" ref={email} required />
                    </div>
                    <div className="form-group">
                        <label for="phone">Phone number</label>
                        <input type="number" className="form-control" id="phone" ref={phone} pattern="[1-9]{1}[0-9]{9}" required />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={submitHandler}>Submit</button>
                </div>
            </form>
        </>
    )
}
