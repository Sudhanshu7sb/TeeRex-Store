import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducers/filtersReducer";



const FilterContext = createContext();
const initialState = {

    color: [],
    gender: [],
    price: [],
    type: [],
}

const FilterProvider = ({ children }) => {
   
    const [{ color, gender, price, type }, filterDispatch] = useReducer(filterReducer, initialState);

   

    return <FilterContext.Provider value={{ color, gender, price, type,filterDispatch }}>
        {children}
    </FilterContext.Provider>
}

const useFilterContext = () => {
    return useContext(FilterContext);
}


export { FilterProvider, FilterContext, useFilterContext }
