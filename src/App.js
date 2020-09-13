import React from 'react';
import './App.css';
import Home from './components/Home/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';
import Store from './components/Store/Store';
import Cart from './components/Cart/Cart';
import Navigate from './components/Navigate/Navigate';
import { GlobalProvider } from './data/GlobalContext'

function App() {
  return (
    <GlobalProvider>
    <BrowserRouter>
          <div>
            <Navigate />
            <Switch>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/store">
                <Store />
              </Route>
              <Route path="/checkout">
                <Checkout />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
          
    </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
