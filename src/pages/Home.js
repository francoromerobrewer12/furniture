import React from 'react'
import './Home.css'
import { Link } from "react-router-dom";
import data from '../data';
import Form from '../components/Form';
import foto3 from '../images/foto3.jpg';

function Home() {
    
    return (
        <div className="home-contenedor">
            <section className="home-jumbo">
                <div className="jumbo-info">
                    <h1 className="jumbo-tittle">Design Your <br></br>Comfort Zone</h1>
                    <p className="jumbo-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?</p>
                    <Link to="/products">
                        <button className="jumbo-btn">SHOP NOW</button>
                    </Link>
                </div>
                <div className="jumbo-pictures">
                    <div className="jumbo-cuadrado"></div>
                    <img src={foto3} alt="jumbo" className="jumbo-picture"/>
                </div>
            </section>

            <section className="featured">
                <h1 className="featured-tittle">Featured Products</h1>
                <div className="featured-underline"></div>
                <div className="featured-list-contenedor">
                    <ul className="featured-list">
                    {
                        data.featuredProducts.map((item) => {
                            return(
                                <div className="producto-destacado" key={item.id}>
                                    <Link to={`/product/${item.id}`}> 
                                        <img src={item.foto} alt={item.name} className="producto-destacado-img"/>
                                    </Link>
                                    <div className="destacado-info">
                                        <p className="destacado-name">{item.name}</p>
                                        <p className="destacado-price">${item.price}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </ul>
                </div>
                <Link to="/products">
                    <button className="featured-btn">ALL PRODUCTS</button>
                </Link>
            </section>

            <Form />
            
        </div>
    )
}

export default Home
