import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

function BestSeller() {
    const {products}= useContext(ShopContext)
    const [bestProducts, setBestProducts]= useState([])

    useEffect(()=>{
        setBestProducts(products.slice(7, 17))
    }, [])
  return (
    <div className='my-10'>
    <div className='text-center py-8 text-3xl'>
        <Title text1={'BEST '} text2={'SELLERS'}/>
    <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500'>
    Discover our exclusive collection of premium clothing, cherished by our valued customers.
    </p>
</div>
<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
    {
        bestProducts.map((item, index)=>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
        ))
    }
</div>
</div>
  )
}

export default BestSeller
