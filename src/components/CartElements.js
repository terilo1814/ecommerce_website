import './CartElements.css'
import { Modal } from './Modal'
import React, { useContext, useEffect } from 'react'
import { CartContext } from './CartContext'
import axios from 'axios'

export const CartElements = (props) => {
    const { cartElements, setCartCount, setCartElements, contextValue } = useContext(CartContext)


    const deleteHandler = (index, id) => {
        setCartElements(cartElements.filter((item, idx) => idx !== index));
    };

    const changeQuantity = (index, quantity) => {
        const cart = [...cartElements]
        const price = cart[index].price / cart[index].quantity

        if (quantity == 'add') {
            cart[index].quantity += 1
            cart[index].price = price * cart[index].quantity
        }
        else {
            if (cart[index].quantity == 1) {
                deleteHandler(index)
                return
            }

            cart[index].quantity -= 1
            cart[index].price = price * cart[index].quantity
        }
        setCartElements(cart)
    }

    const totalPrice = cartElements?.reduce(
        (total, item) => total + item.price,
        0
    );

    const totalQuantity = cartElements?.reduce(
        (total, item) => total + item.quantity, 0
    )

    return (
        <Modal onClose={props.hideCartHandler}>

            {cartElements?.length > 0 ?
                <>
                    <div className="cart-container">

                        {cartElements.map((item, index) =>
                            <div className="cart" key={item.title}>
                                <img className="cart-image w-20" src={item.imageUrl} alt={item.title} />
                                <h2 className="cart-title w-30">{item.title}</h2>
                                <button className='btn-change w-5' onClick={() => changeQuantity(index, 'minus')}>-</button>
                                <p className="cart-quantity w-10">{item.quantity}</p>
                                <button className='btn-change w-5' onClick={() => changeQuantity(index, 'add')}>+</button>
                                <p className="cart-price w-20">Rs. {item.price}</p>
                                <button className='btn-delete w-10' onClick={() => deleteHandler(index)}>Delete</button>
                            </div>
                        )}
                    </div>
                    <div className="total-container">
                        <p className='w-20'></p>
                        <p className="total-text w-30">Total Price</p>
                        <p className='w-5'></p>
                        <p className="total-quantity w-10">{totalQuantity}</p>
                        <p className='w-5'></p>
                        <p className="total-price w-30">Rs {totalPrice.toFixed(2)}</p>

                    </div>
                    <div className='btn-container'>
                        <button className='btn' onClick={props.hideCartHandler}>Close</button>
                        <button className='btn' >Order</button>
                    </div>

                </> : 'Nothing to display'}
        </Modal>



    )
}
