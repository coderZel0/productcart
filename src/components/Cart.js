import React from 'react'
import { ProductsContext } from '../context/Context'
import Table from './Table'
import CartRow from './CartRow'

const Cart = () => {
  const {state:{cart}} = ProductsContext();

  return (
    <div className='container flex flex-col mx-auto p-6 mt-10 md:flex-row'>
        <div className='cartItems w-2/3'>
          <Table columns={[{name:"Product"},{name:'name'},{name:"price"},{name:"Quantity"},{name:"Sub total"}]}>
              {cart.map((item)=><CartRow key={item.id} item={item} />)}
          </Table>
        </div>
    </div>
  )
}

export default Cart