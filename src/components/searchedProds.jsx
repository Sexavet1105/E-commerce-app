import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

function searchedProds() {
    const {search} = useParams()
    const {products} = useSelector((store)=> store.product)
    const navigate = useNavigate()
    return (
    <div className='flex-row' style={{flexWrap:"wrap",marginTop:25}}>
        {
            products && products.filter((product) =>(
                product.title.toLowerCase().includes(search.toLowerCase())
              )).map((product)=>
                <div className='card' key={product.id}>
                <img className="img"src={product.image} />
                <div>
                    <p style={{textAlign:"center",height:70}}>{product.title}</p>
                    <h3 style={{textAlign:"center"}}>{product.price}₺</h3>
                </div>
                <div className='flex-row'>
                    <button onClick={()=> navigate(`/product-details/${product.id}`)} className='button'>Details</button>
                </div>
            </div>
        )}
    </div>
  )
}

export default searchedProds