import { createContext, useContext, useEffect, useReducer } from "react";
import cartReducer from "../reducers/cartReducer";


const CartContext = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("TeeRexStore") || [];
    if (localCartData.length === 0 ) {
        return []
    } else {
        return JSON.parse(localCartData);
    }
}


const initialState = {
    cart: getLocalCartData() ,
    total_items: 0,
    total_price: 0,
}


const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (id, product, amount) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, product, amount } })

    }

    const removeProductFromCart = (id) => {
        dispatch({ type: "REMOVE_PRODUCT_FROM_CART", payload: id })
    }

    const setIncrease = (id) => {
        dispatch({ type: "SET_INCREASE", payload: id })
    }
    const setDecrease = (id) => {
        dispatch({ type: "SET_DECREASE", payload: id })
    }


    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" })
    }

    useEffect(() => {
        dispatch({ type: "TOTAL_CART_ITEMS" });
        dispatch({ type: "TOTAL_PRICE" });
        localStorage.setItem("TeeRexStore", JSON.stringify(state.cart))
    }, [state.cart])


    return <CartContext.Provider value={{ ...state, addToCart, removeProductFromCart, clearCart, setDecrease, setIncrease }}>
        {children}
    </CartContext.Provider>
}


const useCartContext = () => {
    return useContext(CartContext)
}

export { CartContext, CartProvider, useCartContext }