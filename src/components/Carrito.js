import React,{useState} from 'react'
import { useCounter } from '../hook/useCounter'
import CardCart from '../pages/CardCart';
import Checkout from './Checkout';


const Carrito = ({logeado}) => {
    let carrito = []
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
    }
    const [estado, setState] = useState(false)
    const [articulos, setArticulos] = useState(carrito)
    const [indice, setIndice] = useState(0)
    const { state, incremento, decremento } = useCounter(1)
    const [pagar, setPagar] = useState(false)
    const [total , SetTotal] = useState(0)
    const [cuenta, setCuenta] = useState(false)

    const modificarEStado = (e,i) => {
        setState(e)
         setIndice(i) 
        
    }

    const modificarCantidad = (i) => {
       let elements = articulos
       elements[i].cantidad = state
       setArticulos(elements) 
       localStorage.setItem('carrito', JSON.stringify(elements))
    }

    const pagarBuys =() => {
        let resumen =[] 
        articulos.forEach(el => {
            let obj ={}
            obj.nombre = el.tipo
            obj.precio = el.precio
            obj.cantidad = el.cantidad
            obj.subTotal = el.cantidad * el.precio
            resumen.push(obj)
        });
       let pagoTotal =resumen.reduce((ac, c) => ac + c.subTotal, 0)
       let total = {total: pagoTotal }
        resumen.push(total)
       SetTotal(resumen[resumen.length-1].total)
    
        if(articulos.length> 0){
            setPagar(true)
        }    
    }
    const eliminar = (id) => {
         let elements = articulos 
         elements.splice( id, 1 );
         setArticulos(elements) 
       localStorage.setItem('carrito', JSON.stringify(elements)) 
    }
    const verificaTuCuenta = (estadoC)=>{
        setCuenta(estadoC) 
    }

  
    return (
            <div>
                 {!pagar ? <CardCart 
                estado={estado}
                modificarEStado={modificarEStado}
                articulos ={articulos}
                indice={indice}
                state ={state}
                incremento={incremento}
                decremento ={ decremento}
                modificarCantidad={modificarCantidad}
                pagarBuys={pagarBuys}
                eliminar={eliminar}
                logeado={logeado}
                verificaTuCuenta={verificaTuCuenta}
                cuenta={cuenta}
                /> 
              :
              <div> 
                
                  <Checkout total ={total} description={"guappjolotas"}/>
              </div>
            
            }
            </div>
           
    )
}

export default Carrito
