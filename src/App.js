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
import { Navbar } from "./components/Navbar";
import axios from "axios";



function App() {

  const CRUD_KEY = "ff6a86ac8b1f4ca196326a6c886782aa";
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

  const [cartIsShown, setCartIsShown] = useState(false)

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  const showCartHandler = () => {
    setCartIsShown(true)
    const modifiedEmail = emailId.replace(/[.@]/g, "");
    axios.get(`https://crudcrud.com/api/${CRUD_KEY}/cart${modifiedEmail}`)
      .then((response) => {
        if (response.data[0]?._id)
          setResponseId(response.data[0]._id)
        if (response.data[0]?.cartElements)
          setCartElements(response.data[0]?.cartElements);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const initialToken = localStorage.getItem('token')
  const initialEmail = localStorage.getItem('email')


  const [token, setToken] = useState(initialToken)
  const [emailId, setEmailId] = useState(initialEmail)
  const [responseId,setResponseId]=useState(null)


  useEffect(() => {
    if (emailId) {
      const modifiedEmail = emailId.replace(/[.@]/g, "");
      axios.get(`https://crudcrud.com/api/${CRUD_KEY}/cart${modifiedEmail}`)
        .then((response) => {
          if (response.data[0]?._id)
            setResponseId(response.data[0]._id)
          if (response.data[0]?.cartElements)
            setCartElements(response.data[0]?.cartElements);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [emailId])


  useEffect(() => {

    if (emailId && cartElements?.length >=0) {
      console.log("Test")
      updateApi()
    }

  }, [cartElements])

  

  const updateApi = async () => {
    try {
      const modifiedEmail = emailId.replace(/[.@]/g, "");
      let result;
      if (responseId) {
        // put command
        result = await axios.put(`https://crudcrud.com/api/${CRUD_KEY}/cart${modifiedEmail}/${responseId}`, { cartElements })
      }
      else {
        // Post command
        result = await axios.post(`https://crudcrud.com/api/${CRUD_KEY}/cart${modifiedEmail}`, { cartElements })
        setResponseId(result.data?._id);
      }
    }
    catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    let count = 0;
    cartElements?.map((item) => {
      count = count + item.quantity
    })
    setCartCount(count)
  }, [cartElements])


  const usersLoggedIn = !!token

  const loginHandler = (data) => {
    setToken(data.idToken)
    localStorage.setItem('token', data.idToken)

    setEmailId(data.email)
    localStorage.setItem('email', data.email)
  }

  const logoutHandler = () => {
    setToken(null)
    localStorage.removeItem('token', token)
    localStorage.removeItem('email')
    history.replace('/')
  }

  const contextValue = {
    token: token,
    isLoggedIn: usersLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    userEmail: emailId
  }

  return (
    <>
      <CartContext.Provider value={{
        itemList, setItemList, cartElements, setCartElements,
        cartCount, setCartCount, cartIsShown, setCartIsShown,
        showCartHandler, hideCartHandler, contextValue
      }}>

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
            <Navbar showCartHandler={showCartHandler} />
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
