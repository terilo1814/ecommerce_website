import './Navbar.css';
import { CartContext } from './CartContext';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';

export const Navbar = ({ showCartHandler, showCartButton }) => {
  const { cartCount } = useContext(CartContext);

  return (
    <header>
      <ul className="header">
        <li>
          <NavLink to="./home" activeClassName='link'>HOME</NavLink>
        </li>
        <li>
          <NavLink to="./" exact activeClassName='link'>STORE</NavLink>
        </li>
        <li>
          <NavLink to="./about" activeClassName='link'>ABOUT</NavLink>
        </li>
        <li>
          <NavLink to="./contact" activeClassName='link'>CONTACT US</NavLink>
        </li>
        <li>
          <NavLink to="./auth" activeClassName='link'>PROFILE</NavLink>
        </li>

        {showCartButton && <button className="cart-holder" onClick={showCartHandler}>Cart
          <span className="cart-number">{cartCount}</span>
        </button>}
      </ul>
    </header>
  );
};