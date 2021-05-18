import React, { useState } from 'react'
import styled from 'styled-components'; 
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../containers/Home';
import Header from '../componets/Header';
import ProductoId from '../pages/ProductoId';
import Registration from '../componets/Registration';
import Loading from '../pages/Loading'
import Checkout from '../componets/Checkout';
function App({ Component }) {
const [state, setstate] = useState(true)
setTimeout(() => {
  setstate(false)
}, 2000);
  return (
      <>
       
<Loading visible = {state}/>
       <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/producto/:id"> <ProductoId/> </Route>
        <Route path="/enterokay/"> <Registration/> </Route>
        <Route path="/checkout/"> <Checkout/> </Route>
      </Switch>
      </BrowserRouter> 
 </>
    
  )
}
export default App;