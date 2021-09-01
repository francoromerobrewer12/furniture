import React, {useEffect} from 'react'
import './Products.css'
import PageTittle from '../components/PageTittle'
import Filters from '../components/Filters'
import { BsFillGridFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import ProductoLista from '../components/ProductoLista';
import ProductoGrilla from '../components/ProductoGrilla';
import data from '../data';
import { useGlobalContext } from '../context';


function Products() {
    const {state,productos, category, color, company, precioFiltro, sort, vista, switchVista, setSort} = useGlobalContext();

    const handleSort = (e) => {
        setSort(e.target.value);
    }

    const mostrarProductos = () => {
        return (productos.map((item) => {
            const {id} = item;
            if(vista){
                return <ProductoGrilla key={id} {...item} />
            } else {
                return <ProductoLista key={id} {...item} />
            }
        }))
    }

    useEffect(() => {
        mostrarProductos()
    },[productos, category, color, company, precioFiltro, sort])

    return (
        <div className="products-contenedor">
            <PageTittle page="Products" />
            <div className="products-content">
                <Filters />
                <div className="products-area">
                    <div className="buttons-area">
                        <div className="buttons-col1">
                            <div className="vistas-btn">
                                <BsFillGridFill className={vista ? "vista-btn activo" : "vista-btn"} onClick={switchVista}/>
                                <GiHamburgerMenu className={vista ? "vista-btn" : "vista-btn activo"} onClick={switchVista}/>    
                            </div>
                            <p className="products-length">{`${productos.length} Products Found`}</p>
                        </div>
                        <div className="hr"></div>
                        <div className="buttons-col2">
                            <p className="sort">Sort by</p>
                            <select name="order" value={sort} onChange={handleSort}>
                                <option value="A-Z">A-Z</option>
                                <option value="Z-A">Z-A</option>
                                <option value="Lowest">Lowest</option>
                                <option value="Highest">Highest</option>
                            </select>
                        </div>
                    </div>

                    <div className="listado-productos">
                        <ul className={vista ? "listado grilla" : "listado"}>
                        {   
                            mostrarProductos()
                        }
                        </ul>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Products 
