import React from 'react'
import Table,{TableRow} from './Table'

const Cart = () => {
  return (
    <div className='container flex flex-col mx-auto p-6 mt-10 md:flex-row'>
        <div className='cartItems w-2/3'>
          <Table columns={[{name:"Product"},{name:"price"},{name:"Quantity"},{name:"Sub total"}]}>

          </Table>
        </div>
    </div>
  )
}

export default Cart