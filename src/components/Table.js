import React from 'react'
import { ProductsContext } from '../context/Context'

export const TableRow = ({item})=>{
    const {dispatch} = ProductsContext();

    return (item && <tr className='p-6 space-x-6 font-medium text-gray-700'>
        <td className='p-6 mx-6'>
          <div className='p-2 bg-gray-200'>
            <img className='bg-gray-300' style={{width:"50px" ,height:"50px"}} src={item.image} alt={item.image}></img>
          </div>
        </td>
        <td className='p-3 mx-2 space-y-2'>
          <span>{item.title}</span>
          <p className='text-sm w-2/3'>{item.description && item.description.substring(0,100)+'...'}</p>
        </td>
        <td className='p-4 mx-4 capitalize'>{item.category}</td>
        <td className='p-6 mx-4'>
          <div className='flex items-center justify-center space-x-2'>
            <i style={{color:`${item.instock?'green':'red'}`}} className="fa-solid fa-face-smile"></i>
            <span className={`truncate ${item.instock?'text-green-500':'text-red-500'}`}>{item.instock?"In stock":"no stock"}</span>
          </div>
          
        </td>
        <td className='p-4 mx-4'>{'$'+item.price}</td>
        <td className='p-6 px-12'>
          <div className='flex space-x-4 items-center'>
            <input style={{width:"40px",height:"30px"}} className='text-center' type="number" onChange={(e)=>dispatch({type:"QTY",payload:{id:item.id,value:e.target.value}})} value={item.qty} name='qty'/>
            <div className='p-1 px-2 bg-zinc-700'>
              <i style={{color:"white"}} className="fa-solid fa-cart-shopping"></i>
            </div>
            <input type='checkbox' checked={item.inCart?true:false} onChange={(e)=>dispatch({type:"IN_CART",payload:{id:item.id}})} id='add_to_cart'/>
          </div>
          
        </td>
        
    </tr>)
}

const Table = ({children,columns}) => {
  return (
    <table className='bg-gray-100 w-full mx-auto'>
        <tbody>
            <tr style={{borderBottom:'2px solid gray'}} className='bg-gray-200 p-6 space-x-6'>{columns.map((column)=><th className='p-6 mx-6 text-bold font-medium text-gray-800 capitalize' key={column.name}>{column.name}</th>)}</tr>
            {children}
        </tbody>
    </table>
  )
}

export default Table