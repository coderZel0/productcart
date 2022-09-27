import React, { useEffect, useState } from 'react';
import {ProductsContext} from '../context/Context'
import Table,{TableRow} from './Table';
import {useNavigate} from 'react-router-dom'

function ProductList(){
    const {state:{products,categories,filter,search},dispatch} = ProductsContext();
    const [items,setItems] = useState([])
    const navigate = useNavigate();

    const filterProducts = ()=>{
        var fProducts = products;

        if(filter.category){
            fProducts = products.filter((item)=>{
                return item.category === filter.category;
                
            })
        }

        console.log(fProducts)
        setItems(fProducts);
        return fProducts;
        
    }

    const addToCart = ()=>{
        const cartItems = products.filter((item)=>{
            return item.inCart;
        })
        console.log(cartItems)
        dispatch({type:"ADD_TO_CART",payload:cartItems})
        navigate('./cart')
    }

    useEffect(()=>{
        filterProducts();
    },[filter.category])

    useEffect(()=>{
        if(search === ''){
            filterProducts();
            return;
        }
        if(items.length<1) return;
        console.log(items)
        const nItems = items.filter((item)=>{
            const name = item.title.toLowerCase()
            return name.indexOf(search.toLowerCase())>-1
               
            /*|| item.category.toLowerCase().indexOf(search.toLowerCase())>-1 */
        })
        console.log(nItems)
        setItems(nItems)
        
    },[search])

    return(<div className='productlist container p-6 mt-32 mx-auto'>
        <div className='p-6 mx-auto flex justify-center items-center md:justify-between'>
            <div className='filter flex items-center'>
                <select style={{border:'2px solid gray'}} onChange={(e)=>dispatch({type:"FILTER",payload:e.target.value})} value={filter.category} className='p-1 px-3 focus:outline-none rounded-lg text-zinc-700 font-medium capitalize' name='category'>
                    <option value='All'></option>
                    {categories && categories.map((item)=><option className='capitalize font-medium' key={item} value={item}>{item}</option>)}
                </select>
                <div onClick={()=>dispatch({type:"REFRESH_FILTER"})} className='text-bold space-x-2 text-sm mx-3 cursor-pointer font-medium text-cyan-200'>
                    <i style={{color:"cyan"}} className='fas fa-refresh'></i>
                    <span style={{color:"cyan"}}>Refresh</span>
                </div>
            </div>
            <div className='search flex space-x-6'>
                <div>
                    <label className='mx-2 font-medium text-zinc-700'>Search:</label>
                    <input className='p-1 focus:outline-none bg-gray-300 rounded-lg' onChange={(e)=>dispatch({type:'SEARCH',payload:e.target.value})} type='text' value={search} />
                </div>
                <div>
                    <button onClick={addToCart} className='border-none p-1 px-3 text-bold text-white font-medium bg-cyan-500'>Add to cart</button>
                </div>
            </div>
        </div>
        <Table columns={[{name:"product"},{name:"name"},{name:"category"},{name:'stock'},{name:"price"},{name:"buy"}]}>
            {items && items.map((item)=><TableRow key={item.id} item={item}/>) 
           }
           {filter.category==='All' && products.map((item)=><TableRow key={item.id} item={item}/>)}
        </Table>
        
    </div>)
}


export default ProductList;