export const filterReducer = (state, { type, payload }) => {
    switch (type) {
        case "COLOR":
            return {
                ...state,
                color: payload.check ? [...state.color, payload.option] : (state.color.length > 0 ? state.color.filter(item => item !== payload.option) : [])
            }
        case "GENDER":
            return {
                ...state,
                gender: payload.check ? [...state.gender, payload.option] : (state.gender.length > 0 ? state.gender.filter(item => item !== payload.option) : [])
            }
        case "TYPE":
            return {
                ...state,
                type: payload.check ? [...state.type, payload.option] : (state.type.length > 0 ? state.type.filter(item => item !== payload.option) : [])
            }
        case "PRICE":

            return {
                ...state,
                price: payload.check ? [...state.price, payload.option] : (state.price.length > 0 ? state.price.filter(item => item !== payload.option) : [])
            }
        case "CLEAR":
            return {
                ...state,
                price: [],
                type: [],
                color: [],
                gender: [],
            }
        
        default:
            return { ...state }
    }

}