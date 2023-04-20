import './Navbar.css'

export const Navbar = ({showCartHandler}) => {
    return (
        <>
            <header>
                <ul className="header">
                    <li><a href="./Shopping.html">HOME</a></li>
                    <li><a href="#">STORE</a></li>
                    <li><a href="./about.html">ABOUT</a></li>
                    <button  className="cart-holder" onClick={showCartHandler}>Cart
                    <span class="cart-number">0</span></button>
                </ul>
            </header>
        </>
    )
}
