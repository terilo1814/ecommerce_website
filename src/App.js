import { Navbar } from "./components/Navbar";
import { Products } from "./components/Products";
import { CartElements } from "./components/CartElements";
import { useState } from "react";


function App() {
  const [cartIsShown, setCartIsShown] = useState(false)


  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  return (
    <>
      <Navbar showCartHandler={showCartHandler} />
      <Products />
      {cartIsShown && <CartElements hideCartHandler={hideCartHandler} />}
    </>
  );
}

export default App;
