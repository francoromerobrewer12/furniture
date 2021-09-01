import React, { useEffect } from 'react'
import './Filters.css'
import data from '../data'
import { useGlobalContext } from '../context'

function Filters() {
    const {input, category, company, color, precioFiltro, sort,setInput, setSort, setPrecioFiltro, setColor, setCategory, setCompany, setProductos} = useGlobalContext();


    const handleSlider = (e) => {
        setPrecioFiltro(e.target.value)
    }

    const handleCompany = (e) => {
        setCompany(e.target.value);
    }

    const clearFilters = () => {
        setCategory('all')
        setCompany('All')
        setColor('all')
        setPrecioFiltro(3000)
        setProductos(data.products)
        setSort('A-Z')
    }

    //filtro productos segun categoria, company, color y precio
    const aplicarFiltros = () => {

        //filtro segun input del usuario
        let productosIniciales = [];
        if(input === '')
        {
            productosIniciales = data.products;
        }
        if(input !== ''){
            productosIniciales = data.products.filter((item) => item.name.toLowerCase().includes(input.toLowerCase()))
        }

        //filtro productos segun categoria
        let productosCategoryFiltered = [];
        if(category === 'all'){
             productosCategoryFiltered = productosIniciales;
        } else {
             productosCategoryFiltered = productosIniciales.filter((item) => item.category === category)
        }
        
        //filtro segun company
        let productosCompanyFiltered = [];
        if(company === 'All'){
            productosCompanyFiltered = productosCategoryFiltered;
        } else {
            productosCompanyFiltered = productosCategoryFiltered.filter((item) => item.brand === company)
        }

        //filtro segun precio
        let productosPriceFiltered = productosCompanyFiltered.filter((item) => item.price <= precioFiltro)

        //filtro segun color

        let productosTotallyFiltered = [];
        if(color === 'all'){
            productosTotallyFiltered = productosPriceFiltered;
        } else {
            productosTotallyFiltered = productosPriceFiltered.filter((item) => item.color === color)
        }   

        //ordeno productos

        let productosOrdenados = ordenarProductos(productosTotallyFiltered)
        setProductos(productosOrdenados) 
    }
    // funcion encargada de ordenar productos filtrados 
    const ordenarProductos = (array) => {

        if(sort === 'A-Z'){
            console.log("creciente");
            return (array.sort((a,b) => {
                if(a.name < b.name){
                    return -1;
                }
                if(a.name > b.name){
                    return 1;
                }
                return 0;
            }))
        }
        if(sort === 'Z-A'){
            console.log("decreciente");
            return( array.sort((a,b) => {
                if(a.name < b.name){
                    return 1;
                }
                if(a.name > b.name){
                    return -1;
                }
                return 0;
            }))
        }
        if(sort === 'Lowest'){
            console.log("menor precio");
            return( array.sort((a,b) => {
                if(a.price < b.price){
                    return -1;
                }
                if(a.price > b.price){
                    return 1;
                }
                return 0;
            }))
        }
        if(sort === 'Highest'){
            console.log("mayor precio");
            return (array.sort((a,b) => {
                if(a.price < b.price){
                    return 1;
                }
                if(a.price > b.price){
                    return -1;
                }
                return 0;
            }))
        }

       
    }

    useEffect(() => {
        aplicarFiltros()
    },[input,category,company,color,precioFiltro,sort, setSort])
    
    


    return (
        <div className="filters-contenedor">
            <div className="filters-wrap">
                <input type="text" placeholder=" Search" onChange={(e) => setInput(e.target.value)} className="filter-input"/>

                <div className="cols-wrap">
                    <div className="col1">
                        <div className="categories">
                            <h4 className="categories-tittle">Category</h4>
                            <p className="category" data-id="all" onClick={() => setCategory('all')}>All</p>
                            <p className="category" data-id="office" onClick={() => setCategory('office')}>Office</p>
                            <p className="category" data-id="livingroom" onClick={() => setCategory('livingroom')}>Living Room</p>
                            <p className="category" data-id="kitchen" onClick={() => setCategory('kitchen')}>Kitchen</p>
                            <p className="category" data-id="bedroom" onClick={() => setCategory('bedroom')}>Bedroom</p>
                            <p className="category" data-id="kids" onClick={() => setCategory('kids')}>Kids</p>
                        </div>
                        <div className="company">
                            <h4 className="company-tittle">Company</h4>
                            <select name="companies" className="companies" onChange={handleCompany}>
                                <option value="All">All</option>
                                <option value="Ikea">Ikea</option>
                                <option value="Caressa">Caressa</option>
                            </select>
                        </div> 
                    </div>
                    <div className="col2">
                        <div className="colors">
                        <h4 className="categories-tittle">Color</h4>
                        <div className="colors-wrap">
                            <div className="color red" data-id="red" onClick={() => setColor('red')}></div>
                            <div className="color brown" data-id="brown" onClick={() => setColor('brown')}></div>
                            <div className="color grey" data-id="grey" onClick={() => setColor('grey')}></div>
                            <div className="color black" data-id="black" onClick={() => setColor('black')}></div>  
                        </div>                 
                        </div>
                        <div className="price">
                            <h4 className="price-tittle">Price</h4>
                                <p>${precioFiltro}</p>
                                <input type="range" min="0" value={precioFiltro} max="3000" onChange={handleSlider}/>
                        </div> 
                    </div>

                </div>
                
                <button className="clear-filters-btn" onClick={clearFilters}>CLEAR FILTERS</button>
            </div>
        </div>
    )
}

export default Filters 
