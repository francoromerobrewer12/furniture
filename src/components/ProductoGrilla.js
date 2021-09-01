import React from 'react'
import './ProductoGrilla.css'
import { Link } from 'react-router-dom'
import {useGlobalContext} from '../context'


function ProductoGrilla({id,foto,name,price}) {

    const {setIndexFoto} = useGlobalContext()

    return (
        <div className="producto-grilla-contenedor">
            <Link className="linkgrilla" to={`/product/${id}`}>
                <img src={foto} alt={name} onClick={() => setIndexFoto(0)} className="grilla-img"/>
            </Link>
            <div className="grilla-info">
                <p className="grilla-name">{name}</p>
                <p className="grilla-price">${price}</p>
            </div>
        </div>
    )
}

export default ProductoGrilla
