import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Switch,Redirect } from "react-router-dom";
import Home from '../containers/Home';
import Registration from '../componets/Registration';
import Loading from '../pages/Loading'
import Checkout from '../componets/Checkout';
import Carrito from '../componets/Carrito';
import ProductoId from '../componets/ProductoId';
import Login from '../componets/Login';
import { login } from '../actions/auth';
import { useDispatch } from 'react-redux';
import { firebase } from '../firebase/firebase-config'
import { PrivateRoute } from './PrivateRoute';
import PublicRouter from './PublicRouter';
import { startLoadingTask } from '../actions/task';

const PerfilUsuario = () => <p>Holaaaaaaa</p>
function App() {
  
  const dispatch = useDispatch();
  const [ checking, setChecking ] = useState(true);
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

const [state, setstate] = useState(true)
const [logeado, setLogeado] = useState(false)
setTimeout(() => {
  setstate(false)
}, 1000);

useEffect(() => {
  firebase.auth().onAuthStateChanged(async (user) => {
    if (user?.uid) {
      dispatch(login(user.uid, user.displayName));
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    setChecking(false);
  });
}, [dispatch, setChecking]);



const estasLogeado =(estado) =>{
  setLogeado(estado)
}
//cargar data

dispatch(startLoadingTask())
  return (
      <>
       
<Loading visible = {state}/>
       <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Home } />
      <PublicRouter
          exact
          path="/login"
          component={Login}
          isAuthenticated={isLoggedIn}
        />

        <Route path="/producto/:id"
           render={() => (
            <ProductoId
               logeado ={logeado}
               />
           )}
           />
           
        <Route path="/enterokay/"> <Registration/> </Route>
  
       {/*  <Route exact path="/login"
            render={() => (
              <Login
              estasLogeado={estasLogeado}
              />
            )}
          /> */}
  
        <Route path="/checkout/"> <Checkout/> </Route>
        <Route exact path="/cart"
            render={() => (
              <Carrito
                logeado={logeado}
              />
            )}
          />
      
        {/* <Route exact path="/"
           render={() => (
            <Home 
            logeado={logeado}
            />
          )}
       />  */}
        <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/"
                        component={ PerfilUsuario}//TaskScreen }
                    />

                    <Redirect to="/auth/login" />

      </Switch>
      </BrowserRouter> 
 </>
    
  )
}
export default App;