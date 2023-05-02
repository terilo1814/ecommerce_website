import './Navbar.css';
import { CartContext } from './CartContext';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'

export const Navbar = ({ showCartHandler, showCartButton }) => {
  const { cartCount, contextValue } = useContext(CartContext);

  const isLoggedIn = contextValue.isLoggedIn;
  console.log(isLoggedIn);

  const logoutHandler = () => {
    contextValue.logout()
  }

  return (
    <header>
      {isLoggedIn && (
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
      )}
      {/* // <ul className="header">
        //   <li>
        //     <NavLink to="./login" activeClassName="link">
        //       <button className="btn-login">Login</button>
        //     </NavLink>
        //   </li>
        // </ul> */}

    </header>
  );
};
