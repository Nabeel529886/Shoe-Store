import React, { createContext, useReducer } from 'react'
import  AppReducer  from './AppReducer'
import { data } from './fetchData'

const initialState = {
    cartItems: []
}

const ADD_TO_CART = "ADD_TO_CART"
const REMOVE_FROM_CART = "REMOVE_FROM_CART"

export const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {
        const [state, dispatch] = useReducer(AppReducer, initialState)

        function addToCart(item){
            dispatch({
                type: ADD_TO_CART,
                payload: item
            })
        }

        function removeFromCart(item){
            dispatch({
                type: REMOVE_FROM_CART,
                payload: item
            })
        }

        return (
            <GlobalContext.Provider value={{
                data,
                addToCart,
                removeFromCart,
                cartItems: state.cartItems,
            }}>
                { children }
            </GlobalContext.Provider>
        )
}