import './Navbar.css'

export const Navbar = () => {
    return (
        <>
            <header>
                <ul className="header">
                    <li><a href="./Shopping.html">HOME</a></li>
                    <li><a href="#">STORE</a></li>
                    <li><a href="./about.html">ABOUT</a></li>
                    <a href="#cart" class="cart-holder">cart<span class="cart-number">0</span></a>
                </ul>
            </header>
        </>
    )
}
