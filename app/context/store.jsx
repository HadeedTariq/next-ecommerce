"use client";
import products from "@/utils/data/products";
import  { createContext, useReducer, useContext } from "react";
export const stateHolder = {
    SET_MENU: "Set-Menu",
    SET_CATEGORY: "Set-Category",
    SET_ALL: 'Set-All',
    SET_CART: 'Set-Cart',
    REMOVE_CART: "Remove-Cart"
}
export const initialState = {
    menu: false,
    products: products,
    cart:[]
}

const reducer = (state, action) => {
    if (stateHolder.SET_MENU === action.type) {
        return {
            ...state,
            menu: action.menu
        }
    }
    else if (stateHolder.SET_CATEGORY === action.type) {
        return {
            ...state,
            products: products.filter((product) => product.category === action.category),
            menu: false
        }
    }
    else if (stateHolder.SET_ALL === action.type) {
        return {
            ...state,
            products: action.products,
            menu: false
        }
    }
    else if (stateHolder.SET_CART === action.type) {
        return {
            ...state,
            cart:[...state.cart,action.product],
        }
    }
    else if (stateHolder.REMOVE_CART === action.type) {
        return {
            ...state,
            cart: state.cart.filter((item)=>item!==action.product)
        }
    }
};

export const Context = createContext({ state: initialState, dispatch: () => null });

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );
};
export const useStore = () => useContext(Context)
