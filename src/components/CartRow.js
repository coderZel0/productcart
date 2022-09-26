import React from 'react'
import { ProductsContext } from '../context/Context'

const CartRow = ({item}) => {
    const {dispatch} = ProductsContext();

    return (item && <tr className='p-6 space-x-6'>
                        <td className='p-6 mx-6'>
                            <div className='flex items-center space-x-6'>
                                <div onClick={()=>dispatch({type:"REMOVE_FROM_CART",payload:item.id})} className='cross cursor-pointer'>x</div>
                                <div className='p-2 bg-gray-200'>
                                    <img className='bg-gray-300' style={{width:"50px" ,height:"50px"}} src={item.image} alt={item.image}></img>
                                </div>
                                <span>{item.title.substring(0,30)}</span>
                            </div>  
                        </td>
                        <td className='p-3 text-center'>{'$'+item.price}</td>
                        <td className='p-4 mx-4'>
                            <div className='flex justify-center items-center space-x-3'>
                                <div onClick={()=>dispatch({type:"X_QTY",operation:"DECR",payload:item.id})} className='text-sm hover:cursor-pointer'><i className='fas fa-minus'></i></div>
                                <div>{item.qty}</div>
                                <div onClick={()=>dispatch({type:"X_QTY",operation:"INCR",payload:item.id})} className='text-sm hover:cursor-pointer'><i className='fas fa-plus'></i></div>
                            </div>
                        </td>
                        <td className='p-4 mx-4 text-center'>{'$'+Math.floor(item.price*item.qty).toFixed(2)}</td>
                    </tr>)
}

export default CartRow