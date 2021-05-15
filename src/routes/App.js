import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../containers/Home';
import ProductoId from '../pages/ProductoId';
import Checkout from '../componets/Checkout';
import Carrito from '../componets/Carrito'

function App({ Component }) {

  return (
      <>
      
       <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/producto/:id"> <ProductoId/> </Route>
        <Route path="/checkout" component={Checkout}/>
        <Route path="/carrito" component={Carrito}/>
      </Switch>
      </BrowserRouter> 
 </>
    
  )
}
export default App;