import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import '../css/ProductDetails.css'
import { addToBasket } from '../redux/slices/basketSlice';
function ProductDetails() {
    const dispatch  = useDispatch()
    let [count ,setCount] =useState(0)
    const {id} =useParams()
    const {products ,selectedProduct} = useSelector((store)=> store.product)
    const {image, description,price,title} = selectedProduct
   
    const increment = ()=>{
        setCount(++count)
    }
    const decrement = ()=>{
        setCount(--count)
    }
    useEffect(()=>{
        getProductById()
    },[])
    const getProductById =()=>{
        products && products.map((product)=>{
            if(product.id == id){
                dispatch(setSelectedProduct(product))
            }
        })
    }
    
    const addBasket = ()=>{
        const Payload = {
            id,
            price,
            title,
            image,
            count,
            description, 
        }
        dispatch(addToBasket(Payload))
    }
  return (
    <div style={{marginTop:30,display:'flex',flexDirection:'row',justifyContent:'center'}}>
        <div style={{marginRight:40}}>
        <img src={image}  width={300} height={500}/>
        </div>
        <div>
            <h2 className='title'>{title}</h2>
            <h3 className='description'>{description}</h3>
            <h1 className='price'>{price}₺</h1>
            <div className='all'>
                <CiCirclePlus className='ptk' onClick={increment}/>
                <span >{count}</span>
                <CiCircleMinus  className='mtk' onClick={decrement}/>
            </div>
            <div>
                <button onClick={addBasket} className='btn' >Add to cart</button>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails