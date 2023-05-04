import { createContext } from "react";

export const CartContext = createContext({
    itemList: [],
    setItemList: () => { },
    cartElements: [],
    setCartElements: () => { },
    cartCount: 0,
    setCartCount: () => { },
    cartIsShown: false,
    setCartIsShown: () => { },
    showCartHandler: () => { },
    hideCartHandler: () => { },
    token: '',
    isLoggedIn: false,
    login: (token) => { },
    logout: () => { },
    emaiId: '',
    setEmailId: () => { }
});
