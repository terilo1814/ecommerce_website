import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CartContext } from './CartContext';
import { Navbar } from './Navbar';
import { CartElements } from './CartElements';

export const ProductDescription = (props) => {


  const { itemList, cartElements, setCartElements, setCartCount, cartIsShown, showCartHandler, hideCartHandler, contextValue } = useContext(CartContext);


  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');

  const isLoggedIn = contextValue.isLoggedIn;
  console.log(isLoggedIn)


  const addItem = (item) => {
    let newItem = true;
    const newData = [...cartElements];
    newData.forEach((data) => {
      if (data.title === item.title) {
        data.quantity += 1;
        data.price *= data.quantity;
        newItem = false;
      }
    });
    if (newItem) {
      item.quantity = 1;
      newData.push(item);
    }

    setCartElements(newData);
    setCartCount((prevCount) => prevCount + 1);
  };

  const item = itemList.find((item) => item.id === id);
  if (!item) {
    return <div></div>;
  }


  return (
    <>
    
      <Navbar showCartButton={true} showCartHandler={showCartHandler} />
      <div className="prod-container">
        <div>
          <img src={item.imageUrl}></img>
          <div className="image-drawer">
            {item.imageCollection.map((data) => (
              <img src={data} ></img>
            ))}
          </div>
        </div>
        <div className="details">
          <h2>{item.title}</h2>
          <h3>Price:{item.price}</h3>
          <button type="button" className="cart-button" onClick={() => addItem({ ...item })}>
            Add to Cart
          </button>
        </div>
        <div className="review">
          <h2>Review</h2>
          {item.review.map((data) => (
            <>
              <h3>
                <li>{data.header}</li>
              </h3>
              <h5>{data.description}</h5>
            </>
          ))}
        </div>
        <div> </div>
      </div>

      {cartIsShown && <CartElements hideCartHandler={hideCartHandler} />}

    </>
  );
};
