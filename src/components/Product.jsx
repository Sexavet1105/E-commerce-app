import React from 'react'
import "../css/product.css"
import { useNavigate } from 'react-router-dom'

function Product({product}) {

    const {id ,image, description,price,title} = product
    const navigate = useNavigate()

    return (
    <div className='card' id='cards'>
        <img className="img" src={image} />
        <div>
            <p style={{textAlign:"center",height:70}}>{title}</p>
            <h3 style={{textAlign:"center"}}>{price}₺</h3>
        </div>
        <div className='flex-row'>
            <button onClick={()=> navigate("/product-details/"+id)} className='button'>Details</button>
        </div>
        
    </div>
  )
}

export default Product
