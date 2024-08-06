import React, { useEffect } from 'react'
import { getAllProducts } from '../redux/slices/productSlice'
import {useDispatch, useSelector} from 'react-redux'
import Product from './Product'
function ProductList() {
    const dispatch = useDispatch()
    const {products} =useSelector((store)=>store.product)
    useEffect(()=>{
        dispatch(getAllProducts())
    },[])
    console.log(products)
  return (
    <div className='flex-row' style={{flexWrap:"wrap",marginTop:25}}>
      {
        products && products.map((product)=>(
          <Product key={product.id} product={product}/>
        ))
      }
    </div>
  )
}

export default ProductList