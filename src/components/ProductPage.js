import { Navbar } from "./Navbar";
import { Products } from "./Products";
import { CartElements } from "./CartElements";
import { useContext } from "react";
import { CartContext } from "./CartContext";


export const ProductPage = () => {
  const { cartIsShown, showCartHandler, hideCartHandler } = useContext(CartContext);

  return (
    <>
      <Navbar showCartHandler={showCartHandler} showCartButton={true} />
      <Products cartIsShown={cartIsShown} />
      {cartIsShown && <CartElements hideCartHandler={hideCartHandler} />}
    </>
  )
}
