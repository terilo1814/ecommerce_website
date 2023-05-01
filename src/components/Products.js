import './Products.css';
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export const Products = () => {
  const { itemList, cartElements, setCartElements, setCartCount } = useContext(CartContext);

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

  return (
    <div className="products-container">
      {itemList.map((item, index) => (
        <div className="product" key={index}>
          <h2 className="product-title">{item.title}</h2>

          <div className='image-container'>
            <Link to={{
              pathname: '/image1',
              search: `?id=${item.id}`
            }}>
              <img
                className="product-image"
                src={item.imageUrl}
                alt={item.title}
              />
            </Link>
          </div>
          <p className="product-price">Price: {item.price}</p>
          <button
            type="button"
            className="product-cart"
            onClick={() => addItem({ ...item })}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};
