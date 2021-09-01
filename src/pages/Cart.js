import React, {useEffect} from 'react'
import './Cart.css'
import PageTittle from '../components/PageTittle'
import {useGlobalContext} from '../context'
import { CgMathMinus } from 'react-icons/cg';
import { CgMathPlus } from 'react-icons/cg';
import { FaTrash } from 'react-icons/fa';


function Cart() {

    const {cartProducts,subtotal,total,getTotals,clearCart,removeFromCart, increaseAmount, decreaseAmount} = useGlobalContext()

    const showCart = () => {
        return(
            cartProducts.map((item) => {

                        let cantidadPorPrecio = parseFloat((item.amount * item.price).toFixed(2));

                        return <div className="cart-item" key={item.id}>
                                    <div className="cart-item-col1">
                                        <img src={item.foto} alt={item.name} className="cart-item-img"/>
                                        <p className="cart-item-name price">{item.name}</p>
                                    </div>
                                    <p className="cart-item-price price">${item.price}</p>
                                    <div className="cart-item-amounts">
                                        <CgMathMinus className="amount-btn" onClick={() => decreaseAmount(item.id)}/>
                                        {item.amount}
                                        <CgMathPlus className="amount-btn" onClick={() => increaseAmount(item.id)}/>
                                    </div>
                                    <p className="cart-item-subtotal">${cantidadPorPrecio}</p>
                                    <FaTrash className="trash" onClick={() => removeFromCart(item.id)}/>
                                </div>
            })
        )
    }

    useEffect(() => {
        showCart()
        getTotals()
    },[cartProducts])

    return (
        <div className="cart-contenedor">
            <PageTittle page="Cart" />
            {cartProducts.length > 0 && 
                <div className="cart-tittles">
                    <p className="cart-tittle">Item</p>
                    <p className="cart-tittle price">Price</p>
                    <p className="cart-tittle">Quantity</p>
                    <p className="cart-tittle subtotal">Subtotal</p>
                </div>
            }
            <div className="cart-items-container">
                {
                    showCart()
                }    
            </div>

            { cartProducts.length > 0 ?
            <div className="totales">
                <div className="cuadroTotales">
                    <div className="cuadroSubtotal">
                        <p className="totales-titulos total">Subtotal: </p>
                        ${subtotal}
                    </div>
                    <div className="cuadroShipping">
                        <p className="totales-titulos ">Shipping Fee: </p>
                        <p className="fee">$5.34</p>
                    </div>
                    <div className="totalDivider"></div>
                    <div className="cuadroTotal">
                        <p className="totales-titulos total">Order Total: </p>
                        ${total}
                    </div>
                </div>
                <button className="clear-cart" onClick={() => clearCart()}>CLEAR CART</button>
            </div> :
            <h2 className="empty-cart">Your cart is actually empty. Go and buy something!</h2>

            }
        </div>
    )
}


export default Cart
