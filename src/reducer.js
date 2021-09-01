
const reducer = (state,action) => {

    if(action.type === 'CLEAR_CART'){
        return {...state, cartProducts:[]}
    }

    if(action.type === 'ADD_TO_CART'){

        let tempCart = state.cartProducts;
        let productoNuevaso = state.misProductos.filter((item) => item.id === action.payload);
        let existe = false;
        console.log(productoNuevaso[0].name);

        
        if(state.cartProducts.length === 0){
            tempCart.push(productoNuevaso[0])
            console.log("agregadaso porque es un nuevo producto y el carrito estaba vacio")
            console.log(tempCart)
        }
        else {

            state.cartProducts.map((item) => {
                if(item.id === action.payload)
                {   
                    existe = true
                }
            })
            
            if(existe) {
                console.log("ya existe bro no te lo voy a agregar")
            } else {
                tempCart.push(productoNuevaso[0])
                console.log("agregado al carrito bro")
            }
        }
        
        return {...state, productoNuevo: productoNuevaso, cartProducts: tempCart}
    }

    if(action.type === 'REMOVE_FROM_CART'){
        let filteredCart = state.cartProducts.filter((item) => item.id !== action.payload)
        console.log('eliminando');
        return {...state, cartProducts: filteredCart}
    }

    if(action.type === 'INCREASE'){
        let cartViejo = state.cartProducts;
        let tempCart = cartViejo.map((item) => {
            if(item.id === action.payload){
                return {...item, amount: item.amount + 1}
            }
            return item
        })
        return {...state, cartProducts: tempCart}
    }
    
    if(action.type === 'INCREASE_SP'){
        let tempCart = state.misProductos.map((item) => {
            if(item.id === action.payload){
                return {...item, amount: item.amount + 1}
            }
            return item
        })
        return {...state, misProductos: tempCart}
    }

    if(action.type === 'DECREASE'){
        let tempCart = state.cartProducts.map((item) => {
            if(item.id === action.payload){
                return {...item, amount: item.amount - 1}
            }
            return item
        }).filter((items) => items.amount !== 0)
        return {...state, cartProducts: tempCart}
    }

    if(action.type === 'GET_TOTALS'){
        console.log("calculo totales");
        let { subtotal, amount} = state.cartProducts.reduce(
            (cartTotal, cartItem) => {
                const {price, amount} = cartItem
                const itemTotal = price * amount

                cartTotal.subtotal += itemTotal
                cartTotal.amount += amount
                return cartTotal
            },
            {
                subtotal: 0,
                amount: 0,
            }
          )

        subtotal = parseFloat(subtotal.toFixed(2));
        return {...state, amount, subtotal, total: subtotal + 5.34}
    }

    if(action.type === 'SET_INDEX'){
        return {...state, indexFoto: action.payload}
    }


    return state
}

export default reducer;