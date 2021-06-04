import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../containers/Home';
import Registration from '../components/Registration';
import Loading from '../pages/Loading'
import Checkout from '../components/Checkout';
import Carrito from '../components/Carrito';
import ProductoId from '../components/ProductoId';
import Login from '../components/Login';

function App() {
const [state, setstate] = useState(true)
const [logeado, setLogeado] = useState(false)
setTimeout(() => {
  setstate(false)
}, 1000);

const estasLogeado =(estado) =>{
  setLogeado(estado)
}
  return (
      <>
       
<Loading visible = {state}/>
       <BrowserRouter>
      <Switch>
        <Route path="/producto/:id"
           render={() => (
            <ProductoId
               logeado ={logeado}
               />
           )}
           />
           
        <Route path="/enterokay/"> <Registration/> </Route>
  
        <Route exact path="/login"
            render={() => (
              <Login
              estasLogeado={estasLogeado}
              />
            )}
          />

        <Route path="/checkout/"> <Checkout/> </Route>
        <Route exact path="/cart"
            render={() => (
              <Carrito
                logeado={logeado}
              />
            )}
          />
      
        <Route exact path="/"
           render={() => (
            <Home 
            logeado={logeado}
            />
          )}
       /> 
      </Switch>
      </BrowserRouter> 
 </>
    
  )
}
export default App;