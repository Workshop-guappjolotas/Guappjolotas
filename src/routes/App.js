import React, { useState, Component } from 'react'
import styled from 'styled-components';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../containers/Home';
import ProductoId from '../pages/ProductoId';
import Checkout from '../componets/Checkout';
import Carrito from '../componets/Carrito'
import Registration from '../componets/Registration';
import Loading from '../pages/Loading'
import Pagado from '../componets/Pagado';

function App({ Component }) {
  const [state, setstate] = useState(true)
  setTimeout(() => {
    setstate(false)
  }, 2000);
  return (
    <>
      <Loading visible={state} />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/producto/:id"> <ProductoId /> </Route>
          <Route path="/checkout" component={Checkout} />
          <Route path="/carrito" component={Carrito} />
          <Route path="/enterokay/"> <Registration /> </Route>
          <Route exact path="/pagado" component={Pagado} />
        </Switch>
      </BrowserRouter>
      </>
  )
}
export default App;