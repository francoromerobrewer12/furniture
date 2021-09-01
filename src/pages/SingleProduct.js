import React, { useEffect } from 'react';
import './SingleProduct.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import data from '../data';
import PageTittle from '../components/PageTittle';
import {useGlobalContext} from '../context'


function SingleProduct() {

    const {indexFoto, setIndexFoto, addToCart, getTotals} = useGlobalContext();

    //obtengo el id de mi url y filtro el producto del array con dicho id
    const identificador = useParams().id;
    const filtrado = data.products.filter((item) => Number(item.id) === Number(identificador));

    const {id,name,amount,foto, fotitos,price,available,brand,description,stars} = filtrado[0];

    const showMainPhoto = () => {
        return <img src={fotitos[indexFoto]} alt={name} className="mainphoto"/>
    }

    useEffect(() => {
        showMainPhoto()
    }, [indexFoto])

    const showSingleProduct = (id) => {
        
        return(
            <div className="singleproduct-area">
                    <div className="singleproduct-images">
                        <div className="product-mainphoto">
                            {
                                showMainPhoto()
                            }
                        </div>
                        <div className="product-littlephotos">
                            {
                                fotitos.map((item, index) => {
                                    return <img src={item} alt={name} key={index} onClick={() => setIndexFoto(index)} className="littlephoto"/>
                                })
                            }
                            
                        </div>
                    </div>

                    <div className="singleproduct-info">
                        <h2 className="singleproduct-tittle">{name}</h2>
                        <h4 className="singleproduct-price">${price}</h4>
                        <p className="singleproduct-descripcion">{description}</p>
                        <p className="singleproduct-available">{`Available: ${available}`}</p>
                        <p className="singleproduct-brand">{`Brand: ${brand}`}</p>
                        <div className="separator"></div>
                        <div className="singleproduct-btns">
                            <div className="singleproduct-amounts">
                                <button className="addtocart-btn" onClick={() => handleAddToCart(id)}>ADD TO CART</button>
                            </div>
                        </div>    
                    </div>
            </div>
        )

    }

    const handleAddToCart = (id) => {
        addToCart(id)
        getTotals()
    }


    return (
        <div className="singleproduct-contenedor">

            <PageTittle page={`Products / ${name}`}/>

            <div className="singleproduct-content">
                <div className="buttonback">
                    <Link to="/products">
                        <button className="backtoproducts">BACK TO PRODUCTS</button>
                    </Link>
                </div>

                {
                    showSingleProduct(id)
                }
                
            </div>

        </div>
    )
}

export default SingleProduct
