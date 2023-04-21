import './Navbar.css';
import { CartContext } from './CartContext';
import { useContext } from 'react';

export const Navbar = ({ showCartHandler }) => {
  const { cartCount } = useContext(CartContext);

  return (
    <header>
      <ul className="header">
        <li>
          <a href="./Shopping.html">HOME</a>
        </li>
        <li>
          <a href="#">STORE</a>
        </li>
        <li>
          <a href="./about.html">ABOUT</a>
        </li>
        <button className="cart-holder" onClick={showCartHandler}>
          Cart <span className="cart-number">{cartCount}</span>
        </button>
      </ul>
    </header>
  );
};
