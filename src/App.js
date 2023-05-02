import { About } from "./components/About";
import { Route, useHistory } from "react-router-dom/cjs/react-router-dom";
import { ProductPage } from "./components/ProductPage";
import { HomePage } from "./components/HomePage";
import { Contact } from "./components/Contact";
import { ProductDescription } from "./components/ProductDescription";
import { CartContext } from "./components/CartContext";
import { useEffect, useState } from "react";
import AuthForm from "./Auth/AuthForm";
import { ProfileForm } from "./components/ProfileForm";






function App() {

  const history = useHistory()

  const [cartCount, setCartCount] = useState(0)

  const [itemList, setItemList] = useState([
    {
      id: '0',
      title: 'iPhone 14 Pro Max',
      price: 127999,
      imageUrl: 'https://img6.gadgetsnow.com/gd/images/products/additional/large/G221615_View_1/mobiles/smartphones/apple-iphone-14-pro-256-gb-space-black-6-gb-ram-.jpg',
      imageCollection: ['https://cdn.webshopapp.com/shops/224579/files/413229834/500x460x2/apple-iphone-14-pro-128gb-goud.jpg', 'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/h/r/e/-original-imaghxeeme2n7hy7.jpeg?q=70'],
      review: [{ header: "Nice Product", description: "Highly Satisfied" }]
    },
    {
      id: '1',
      title: 'Jordan Shoes',
      price: 11000,
      imageUrl: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7b297575-1274-4034-9b25-94634cf9ec44/air-jordan-1-mid-shoes-86f1ZW.png',
      imageCollection: ['https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b32efc15-9bb5-44ef-b83f-e8c952a83859/air-jordan-1-zoom-cmft-2-valentines-day-shoes-pcNKwH.png', 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6c905890-b38b-40b6-9840-15136f048d7b/air-jordan-1-mid-se-shoes-NPvjSb.png'],
      review: [{ header: "Excellent Product", description: "Awesome, comfortable shoe" }]
    },
  ])

  const [cartElements, setCartElements] = useState([])
  //   {
  //     title: 'Colors',
  //     price: 100,
  //     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  //     quantity: 2,
  //   },
  //   {
  //     title: 'Black and white Colors',
  //     price: 50,
  //     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  //     quantity: 3,
  //   },
  //   {
  //     title: 'Yellow and Black Colors',
  //     price: 70,
  //     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  //     quantity: 1,
  //   }
  // ])
  const [cartIsShown, setCartIsShown] = useState(false)

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const initialToken = localStorage.getItem('token')
  const [token, setToken] = useState(initialToken)

  const usersLoggedIn = !!token

  const loginHandler = (token) => {
    setToken(token)
    localStorage.setItem('token', token)
  }

  const logoutHandler = () => {
    setToken(null)
    localStorage.removeItem('token', token)
    history.replace('/')
  }

  const contextValue = {
    token: token,
    isLoggedIn: usersLoggedIn,
    login: loginHandler,
    logout: logoutHandler
  }

  return (
    <>
      <CartContext.Provider value={{
        itemList, setItemList, cartElements, setCartElements,
        cartCount, setCartCount, cartIsShown, setCartIsShown,
        showCartHandler, hideCartHandler, contextValue
      }}>


        {console.log(contextValue.isLoggedIn)}

        {contextValue.isLoggedIn ? (
          <>
            <Route exact path='/'>
              <ProductPage />
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
            <Route exact path='/home'>
              <HomePage />
            </Route>
            <Route exact path='/contact'>
              <Contact />
            </Route>
            <Route exact path='/image1'>
              <ProductDescription />
            </Route>
            <Route exact path='/login'>
              <ProfileForm />
            </Route>
          </>
        ) : (
          <>
            <Route exact path='/'>
              <AuthForm />
            </Route>
            <Route exact path='/forgotpassword'>
              <ProfileForm />
            </Route>
          </>
        )}

      </CartContext.Provider>
    </>
  )
};
export default App
