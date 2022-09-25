import React,{ useEffect } from 'react';
import './App.css';
import {ProductsContext} from './context/Context';
import {Routes,Route} from 'react-router-dom'
import ProductList from './components/ProductList';
import Cart from './components/Cart'
import {data} from './data'

function App() {

  const {state,dispatch} = ProductsContext();
  console.log(state);

  useEffect(()=>{
      /*fetch('https://fakestoreapi.com/products',{
        method:"GET",
        mode:'cors',
        headers:{
          "Access-Control-Allow-Origin":'ALL'
        }
    
      })
      .then(res=>res.json())
      .then((data)=>{
        dispatch({type:"INIT",payload:data})
      })
      .catch((err)=>{
        console.log(err);
        dispatch({type:"INIT",payload:data})
      })*/
      dispatch({type:"INIT",payload:data})
  },[])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ProductList/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
