import React, { useState, useContext, useReducer } from 'react';
import data from './data';
import reducer from './reducer';


const AppContext = React.createContext();

const initialState = {
    misProductos: data.products,
    cartProducts: [],
    productoNuevo: {},
    amount: 0,
    subtotal: 0,
    total: 0,
    indexFoto: 0
}

const AppProvider = ({ children }) => {

    
    const [state,dispatch] = useReducer(reducer,initialState);


    const [productos,setProductos] = useState(data.products);
    const [vista,setVista] = useState(true);
    const [input,setInput] = useState('');
    const [category,setCategory] = useState('all');
    const [company,setCompany] = useState('All');
    const [color,setColor] = useState('all');
    const [precioFiltro,setPrecioFiltro] = useState(3000)
    const [sort,setSort] = useState('A-Z')


    const switchVista = () => {
        setVista(!vista)
    }

    const clearCart = () => {
        dispatch({type: 'CLEAR_CART'})
    }

    const addToCart = (id) => {
        dispatch({type: 'ADD_TO_CART', payload: id})
    }

    const removeFromCart = (id) => {
        dispatch({type: 'REMOVE_FROM_CART', payload: id})
    }

    const increaseAmount = (id) => {
        dispatch({type: 'INCREASE', payload: id})
    }

    const increaseSingleProductAmount = (id) => {
        dispatch({type: 'INCREASE_SP', payload: id})
    }
    
    const decreaseAmount = (id) => {
        dispatch({type: 'DECREASE', payload: id})
    }

    const getTotals = () => {
        dispatch({type: 'GET_TOTALS'})
    }

    const setIndexFoto = (index) => {
        dispatch({type: 'SET_INDEX', payload: index})
    }
    

    return <AppContext.Provider
        value={{
             ...state,
             productos,
             vista,
             input,
             category,
             company,
             color,
             precioFiltro,
             sort,
             setSort,
             setPrecioFiltro,
             setColor,
             setCompany,
             setCategory,
             switchVista,
             setProductos,
             setInput,
             clearCart,
             addToCart,
             removeFromCart,
             increaseAmount,
             increaseSingleProductAmount,
             decreaseAmount,
             getTotals,
             setIndexFoto
        }}
         >
            {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider};