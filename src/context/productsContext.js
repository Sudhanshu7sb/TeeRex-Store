import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/productReducer";

const AppContext = createContext();

const API = "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
const initialState = {
    isLoading: "false",
    isError: "false",
    products: [],
   
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" })

        try {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({ type: "PRODUCTS_DATA", payload: products })
        }
        catch (error) {
            dispatch({ type: "API_ERROR" })

        }
    }

   

    useEffect(() => {
        getProducts(API);
    }, [])


    return (<AppContext.Provider value={{ ...state }}>
        {children}
    </AppContext.Provider>)
}




// custom hook
const useProductContext = () => {
    return useContext(AppContext)
}


export { AppProvider, AppContext, useProductContext }