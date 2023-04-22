import { Navbar } from "./Navbar";
import { Products } from "./Products";
import { CartElements } from "./CartElements";
import { useState } from "react";
import { CartContext } from "./CartContext";

export const ProductPage = () => {
  const [cartIsShown, setCartIsShown] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  const [itemList, setItemList] = useState([
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
      title: 'Blue Color',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
  ])

  const [cartElements, setCartElements] = useState([
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      quantity: 2,
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      quantity: 3,
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      quantity: 1,
    }
  ])

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  const showCartHandler = () => {
    setCartIsShown(true)
  }
  return (
    <>
      <CartContext.Provider value={{ itemList, setItemList, cartElements, setCartElements, cartCount, setCartCount }}>
        <Navbar showCartHandler={showCartHandler} showCartButton={true}/>
        <Products />
        {cartIsShown && <CartElements hideCartHandler={hideCartHandler} />}
      </CartContext.Provider>
    </>
  )
}
