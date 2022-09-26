import React from 'react'
import { Link } from 'react-router-dom'

const Checkout = () => {
  return <>
        <div className='flex justify-center bg-blue-400 p-6 mt-10'>
            <span className='text-4xl text-center text-white'>Thankyou for Buying from us</span>
        </div>
        <div className='flex justify-center mt-20'>
            <Link to='/'>
                <div className='p-4 space-x-3 rounded-lg bg-green-400'>
                    <i className='fas fa-chevron-left'></i>
                    <span className='font-medium'>Shop More</span>
                </div>
            </Link>
        </div>
    </>
        
  
}

export default Checkout