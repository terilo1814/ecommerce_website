import './Navbar.css';
import { CartContext } from './CartContext';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';

export const Navbar = ({ showCartHandler, showCartButton }) => {
  const { cartCount, contextValue } = useContext(CartContext);

  const isLoggedIn = contextValue.isLoggedIn;
  console.log(isLoggedIn);

  const logoutHandler = () => {
    contextValue.logout()
  }

  return (
    <header>
      {isLoggedIn ? (
        <ul className="header">
          <li>
            <NavLink to="./home" activeClassName="link">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="./" exact activeClassName="link">
              STORE
            </NavLink>
          </li>
          <li>
            <NavLink to="./about" activeClassName="link">
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to="./contact" activeClassName="link">
              CONTACT US
            </NavLink>
          </li>
          <li>
            <NavLink to="./login" activeClassName="link">
              <button className="btn-profile">Profile</button>
            </NavLink>
          </li>

          <button className="btn-logout" onClick={logoutHandler}>Log Out</button>

          {showCartButton && (
            <button className="cart-holder" onClick={showCartHandler}>
              Cart
              <span className="cart-number">{cartCount}</span>
            </button>
          )}
        </ul>
      ) : (
        <ul className="header">
          <li>
            <NavLink to="./login" activeClassName="link">
              <button className="btn-login">Login</button>
            </NavLink>
          </li>
        </ul>
      )}
    </header>
  );
};
