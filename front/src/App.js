import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Product from './Components/Product/Product';
import Cart from './Components/Cart/Cart'
import Navbar from './Components/Navbar/Navbar';
import {  createStore,applyMiddleware} from "redux";
import { rootreducer } from "./Redux/MultipleReducer";
import { Provider } from "react-redux";
import thunk from 'redux-thunk'
import axios from "axios"

const store=createStore(rootreducer,applyMiddleware(thunk))
axios.defaults.baseURL="http://localhost:2000/"
const App=()=> {
  return (
    <div className="App">
     <BrowserRouter>
     <Provider store={store}>
     <Navbar/>
        <Route exact path="/" component={Product} />
        <Route exact path="/cart" component={Cart} />
        </Provider>  
      </BrowserRouter>
    </div>
  );
}

export default App;
