import './CartElements.css'
import { Modal } from './Modal'
import React, { useContext } from 'react'
import { CartContext } from './CartContext'

export const CartElements = (props) => {
    const { cartElements, setCartElements } = useContext(CartContext)

    const deleteHandler = index => {
        setCartElements(cartElements.filter((item, id) => id !== index))
    }

    const totalPrice = cartElements.reduce(
        (total, item) => total + item.price,
        0
    );

    const totalQuantity = cartElements.reduce(
        (total, item) => total + item.quantity, 0
    )

    return (
        <Modal onClose={props.hideCartHandler}>

            {cartElements.length > 0 ?
                <>
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
                    <div className="total-container">
                        <p className="total-text">Total Price</p>
                        <p className="total-quantity">{totalQuantity}</p>
                        <p className="total-price">Rs {totalPrice.toFixed(2)}</p>

                    </div>
                    <div className='btn-container'>
                        <button className='btn' onClick={props.hideCartHandler}>Close</button>
                        <button className='btn' >Order</button>
                    </div>

                </> : 'Nothing to display'}
        </Modal>



    )
}
