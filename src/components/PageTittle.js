import React from 'react'
import './PageTittle.css'
import { Link } from 'react-router-dom'

function PageTittle(props) {
    return (
        <div className="pagetittle-contenedor">
            <h1 className="pagetittle-tittle"><Link to="/" className="link">Home </Link><span>/ {props.page}</span></h1>
        </div>
    )
}

export default PageTittle;
