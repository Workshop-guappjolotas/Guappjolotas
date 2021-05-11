import React, { Component } from 'react'
import styled from 'styled-components'; 
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../containers/Home';
import Header from '../componets/Header';
import ProductoId from '../pages/ProductoId';

function App({ Component }) {

  return (
      <>
      
       <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/producto/:id"> <ProductoId/> </Route>
      </Switch>
      </BrowserRouter> 
 </>
    
  )
}
export default App;