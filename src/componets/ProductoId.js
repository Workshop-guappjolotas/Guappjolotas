import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import {useHistory} from "react-router-dom";
import Header from './Header';
import { useCounter } from '../hook/useCounter'
import VerPoductId from '../pages/VerPoductId';


const ProductoId = ({logeado}) => {
    let history = useHistory();
    let carrito = []
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
    }
    let { id } = useParams()
    id = parseInt(id)
    let articulos;
    let [products, setProducts] = useState([])
    const [articulo, setArticulo] = useState([])
    const [articuloBefore, setArticuloBefore] = useState([])
    const [articuloNext, setArticuloNext] = useState([])
    const { state, incremento, decremento } = useCounter(1)
    const [sabor, setSabor] = useState([])
    const [categoria, setCategoria] = useState([])
    const [checkboxes, setCheckboxes] = useState([])
  
    useEffect(() => {
        const obtenerDatos = async () => {
            const data = await fetch(`https://guappjolotas.herokuapp.com/inventario`)
            products = await data.json()
            setProducts(products)
            let index = products.findIndex((element) => element.idArticulo === id)
            let categoria = products[index].categoria
            articulos = products.filter(el => el.categoria === categoria);
            let arrayIndex = articulos.findIndex((element) => element.idArticulo === id)

            setSabor(articulos)
            setCategoria(categoria === 'Bebida' ? 'Guajolota' : 'Bebida')

            articulos.forEach(element => {
                if (element.idArticulo === id) {
                    setArticulo(element)
                }
                if (arrayIndex > 0 && arrayIndex < articulos.length - 1) {
                    setArticuloBefore(articulos[arrayIndex - 1].foto)
                    setArticuloNext(articulos[arrayIndex + 1].foto)

                } else {

                    if (arrayIndex === 0) {

                        setArticuloBefore(null)
                        setArticuloNext(articulos[arrayIndex + 1].foto)
                    }
                }
                if (arrayIndex === articulos.length - 1) {
                    setArticuloBefore(articulos[arrayIndex - 1].foto)
                    setArticuloNext(null)
                }
            });
        }

        obtenerDatos()

    }, [id])
    
    const onCheck = (value, item) => {
        let data = checkboxes
        let dataNew = item
        let filtrarData = data.filter((el) => el.tipo !== dataNew.tipo)

        if (value === true) {
            filtrarData.push(dataNew)
        }
        setCheckboxes(filtrarData)

    }

    const total = () => {
        const suma = checkboxes.reduce((ac, c) => ac + c.precio, 0);
        let total = (articulo.precio * state) + suma
        return total
    }
    const addToCart = () => {
        
         AddCart(articulo, state)
 
        checkboxes.forEach(element => {
           AddCart(element, 1) 
        }); 
     //enviar al carrito
     history.push('/cart')

    }
    const AddCart = (article, State) => {

        const producto = article
        producto.cantidad = State
        //si el product esta en el carrito guardamos su posicion y el elemento 
        let indice = null;
        let elemento = null;
        carrito.forEach((element, index) => {
            if (element.idArticulo === producto.idArticulo) {
                indice = index;
                elemento = element
                return
            }
        });
        //Agregando al carrito modificando cantidad
        if (elemento) {
            carrito[indice].cantidad = producto.cantidad
            localStorage.setItem('carrito', JSON.stringify(carrito))
        } else {
            carrito.push(producto)
            localStorage.setItem('carrito', JSON.stringify(carrito))
        }
    }

    return (
        <>
            <Header  cambiarIcono={true} logeado ={logeado}/> 
            <VerPoductId
                products={products}
                articuloBefore={articuloBefore}
                articulo={articulo}
                articuloNext={articuloNext}
                id={id}
                state={state}
                incremento={incremento}
                decremento={decremento}
                sabor={sabor}
                categoria={categoria}
                onCheck={onCheck}
                total={total}
                addToCart={addToCart}
            />

        </>
    )

}

export default ProductoId