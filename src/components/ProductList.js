import React, { useEffect, useState } from 'react';
import {ProductsContext} from '../context/Context'
import Table,{TableRow} from './Table';

function ProductList(){
    const {state:{products,categories,filter,search},dispatch} = ProductsContext();
    const [items,setItems] = useState([])

    const filterProducts = ()=>{
        var fProducts = products;

        if(filter.category){
            fProducts = products.filter((item)=>{
                return item.category === filter.category;
                
            })
        }
        if(search){
            fProducts.filter((item)=>{
                const name = item.title.toLowerCase()
                return (name.indexOf(search.toLowerCase())>-1 || item.category.toLowerCase().indexOf(search.toLowerCase())>-1)
            })
        }
        console.log(fProducts)
        return fProducts;
        
    }

    const addToCart = ()=>{
        const cartItems = products.filter((item)=>{
            return item.inCart;
        })
        console.log(cartItems)
        dispatch({type:"ADD_TO_CART",payload:cartItems})
    }

    /*useEffect(()=>{
        setItems(filterProducts())
    },[search,filter.category])*/

    return(<div className='productlist container p-6 mt-32 mx-auto'>
        <div className='p-6 bg-blue-300 mx-auto flex justify-center items-center md:justify-between'>
            <div className='filter flex items-center'>
                <select onChange={(e)=>dispatch({type:"FILTER",payload:e.target.value})}  className='p-1 px-3 focus:outline-none rounded-lg' name='category'>
                    <option value='All'></option>
                    {categories && categories.map((item)=><option className='capitalize' key={item} value={item}>{item}</option>)}
                </select>
                <div className='text-bold text-sm mx-3 cursor-pointer font-medium text-blue-800'>Reset</div>
            </div>
            <div className='search flex space-x-6'>
                <div>
                    <label className='mx-2'>Search:</label>
                    <input className='p-1 focus:outline-none' onChange={(e)=>dispatch({type:'SEARCH',payload:e.target.value})} type='text' value={search} />
                </div>
                <div>
                    <button onClick={addToCart} className='border-none p-1 px-3 text-bold text-white font-medium bg-cyan-500'>Add to cart</button>
                </div>
            </div>
        </div>
        <Table columns={[{name:"product"},{name:"name"},{name:"category"},{name:"price"},{name:"buy"}]}>
            {filterProducts().map((item)=><TableRow key={item.id} item={item}/>) 
           }
           {filter.category==='All' && products.map((item)=><TableRow key={item.id} item={item}/>)}
        </Table>
        
    </div>)
}


export default ProductList;