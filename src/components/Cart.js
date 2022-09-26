import React, { useEffect, useState } from 'react'
import { ProductsContext } from '../context/Context'
import Table from './Table'
import CartRow from './CartRow'
import { Link } from 'react-router-dom'

const Cart = () => {
  const {state:{cart}} = ProductsContext();
  const [total,setTotal] = useState(0);

  useEffect(()=>{
    const sum = cart.reduce((init,item)=>{
      return (init+(item.qty*item.price));
    },0)

    setTotal(Math.floor(sum).toFixed(2));

  },[cart])

  return (
    <div className='container flex flex-col items-center mx-auto space-x-6 space-y-6 p-6 mt-10 md:space-y-0 md:items-start md:flex-row'>
        <div className='cartItems md:w-2/3'>
          <Table columns={[{name:"Product"},{name:"price"},{name:"Quantity"},{name:"Sub total"}]}>
              {cart.map((item)=><CartRow key={item.id} item={item} />)}
          </Table>
        </div>
        <div className='px-6 w-full md:w-1/3'>
          <div className='p-6 flex flex-col bg-purple-200 space-y-6'>
              <span className='text-3xl font-medium'>cart totals</span>
              <div style={{borderBottom:"1px solid gray"}} className='py-3 flex items-center justify-between'>
                <span className='text-sm font-medium'>Subtotal</span>
                <span className='text-blue-500'>{'$'+total}</span>
              </div>
              <div className='flex items-center justify-between'>
                <span className='text-lg font-medium'>Total</span>
                <span className='text-lg text-blue-700 font-medium'>{'$'+total}</span>
              </div>
              <Link to='/checkout'>
                <div className='p-3 px-12 bg-blue-700 rounded-full mt-5 font-bold text-center text-md text-white font-medium uppercase'>Proceed to Checkout</div>
              </Link>
          </div>
        </div>
        
    </div>
  )
}

export default Cart