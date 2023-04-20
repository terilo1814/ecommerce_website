import './CartElements.css'
import { Modal } from './Modal'
import React, { useState } from 'react'

export const CartElements = (props) => {

    const deleteHandler = index => {
        setCartElements(cartElements.filter((item, id) => id !== index))
    }


    const [cartElements, setCartElements] = useState([
        {
            title: 'Colors',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
            quantity: 2,
        },
        {
            title: 'Black and white Colors',
            price: 50,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
            quantity: 3,
        },
        {
            title: 'Yellow and Black Colors',
            price: 70,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
            quantity: 1,
        }
    ])

    return (
        <Modal onClose={props.hideCartHandler}>

            {cartElements.length > 0 ? <>
                <div className="cart-container">

                    {cartElements.map((item, index) =>
                        <div className="cart" key={item.title}>
                            <img className="cart-image" src={item.imageUrl} alt={item.title} />
                            <h2 className="cart-title">{item.title}</h2>
                            <p className="cart-quantity">{item.quantity}</p>
                            <p className="cart-price">{item.price}</p>
                            <button className='btn-delete' onClick={() => deleteHandler(index)}>Delete</button>
                        </div>
                    )}
                </div>
                <div className='btn-container'>
                    <button className='btn' onClick={props.hideCartHandler}>Close</button>
                    <button className='btn' >Order</button>
                </div>

            </> : 'Nothing to display'}

        </Modal>


    )
}
