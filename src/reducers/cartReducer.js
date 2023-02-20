

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            let { id, amount, product } = action.payload;

            let { name, color, imageURL, price, quantity } = product;

            let existingProduct = state.cart.find(item => item.id === id + color);


            if (existingProduct) {
                let updatedProduct = state.cart.map((item) => {
                    if (item.id === id + color) {
                        let updatedAmount = item.amount + 1;

                        if (updatedAmount >= item.max) {
                            updatedAmount = item.max;

                        }

                        return {
                            ...item,
                            amount: updatedAmount,

                        }
                    }
                    return item;
                })
                return {
                    ...state,
                    cart: updatedProduct,
                }
            } else {


                let cartProduct = {
                    id: id + color,
                    name,
                    color,
                    amount,
                    price: price,
                    image: imageURL,
                    max: quantity,

                }

                return {
                    ...state,
                    cart: [...state.cart, cartProduct]
                }
            }

        case "REMOVE_PRODUCT_FROM_CART":
            let updatedCart = state.cart.filter((item) => item.id !== action.payload)
            return {
                ...state,
                cart: updatedCart,
            }

        case "SET_INCREASE":
            let updatedProduct = state.cart.map((item) => {
                if (item.id === action.payload) {

                    let incQuantity = item.amount + 1;

                    if (incQuantity >= item.max) {
                        incQuantity = item.max;


                    }
                    return { ...item, amount: incQuantity }
                } else {
                    return item
                }

            })
            return {
                ...state,
                cart: updatedProduct,
            }

        case "SET_DECREASE":
            let updatedProductAfterDecrement = state.cart.map((item) => {
                if (item.id === action.payload) {
                    let decQuantity = item.amount - 1;

                    if (decQuantity <= 1) {
                        decQuantity = 1;
                    }
                    return { ...item, amount: decQuantity }
                } else {
                    return item
                }

            })
            return {
                ...state,
                cart: updatedProductAfterDecrement,
            }
        case "CLEAR_CART":
            return {
                ...state,
                cart: [],
            }

        case "TOTAL_CART_ITEMS":
            let updatedTotalCartItems = state.cart.length;
            return {
                ...state,
                total_items: updatedTotalCartItems,
            }
        case "TOTAL_PRICE":
            let total = state?.cart?.reduce((acc, currItem) => {
                let { price, amount } = currItem;

                acc = acc + (price * amount);
                return acc
            }, 0);
            return {
                ...state,
                total_price: total,
            }

        default:
            return { ...state }

    }
    
}



export default cartReducer;