import React from 'react';
import './ProductoLista.css';
import { Link } from 'react-router-dom';
import {useGlobalContext} from '../context'

function ProductoLista({id,name,foto,price,description,description2}) {

    const {setIndexFoto} = useGlobalContext()
    return (
        <div className="productolista-contenedor">
            <div className="producto-lista-img">
                <img src={foto} alt="name" className="fotito"/>
                <div className="fotito-lupa"></div>
            </div>
            <div className="producto-lista-info">
                <h2 className="producto-lista-tittle">{name}</h2>
                <h5 className="producto-lista-precio">${price}</h5>
                <p className="producto-lista-descripcion">{description2}</p>
                <Link to={`/product/${id}`}>
                    <button className="producto-lista-btn" onClick={() => setIndexFoto(0)}>Details</button>
                </Link>
            </div>
        </div>
    )
}

export default ProductoLista
