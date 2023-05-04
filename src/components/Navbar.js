import './Navbar.css';
import { CartContext } from './CartContext';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'
import { useEffect, useState } from 'react';

export const Navbar = ({ showCartHandler, showCartButton }) => {
  const { cartCount, contextValue } = useContext(CartContext);
  const [logoutTimer, setLogoutTimer] = useState(null);

  const isLoggedIn = contextValue.isLoggedIn;

  const logoutHandler = () => {
    contextValue.logout()
    clearTimeout(logoutTimer);
    setLogoutTimer(null)

  }

  useEffect(() => {
    if (isLoggedIn) {
      const timerId = setTimeout(() => {
        logoutHandler()
        alert('Your session has expired. Please login again.');
      }, 10 * 60 * 1000)
      setLogoutTimer(timerId)
    }

  }, [isLoggedIn])


  return (
    <header>

      <ul className="header">
        <li></li>
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

        <li className='final-li'>
          <div className='right-menu'>
            <NavLink to="./login" activeClassName="link">
              <button className="btn-profile">Profile</button>
            </NavLink>
            <button className="btn-logout" onClick={logoutHandler}>Log Out</button>

            {showCartButton && (
              <>
                <FaShoppingCart className='cart-holder'
                  onClick={showCartHandler} />

                <span className="cart-number">{cartCount}</span>
              </>
            )}
          </div>
        </li>
      </ul>
    </header>
  );
};
