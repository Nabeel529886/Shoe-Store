import { act } from "react-dom/test-utils"

const ADD_TO_CART = "ADD_TO_CART"
const REMOVE_FROM_CART = "REMOVE_FROM_CART"


export default (state, action) => {
    switch(action.type){
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(item =>  item !== action.payload)
            }
        default:
            return state

    }
}