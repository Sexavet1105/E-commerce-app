import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from "../pages/Home"
import ProductDetails from '../components/ProductDetails'
import SearchedProds from '../components/searchedProds'
function RouterConfig() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product-details/:id" element={<ProductDetails/>} />
        <Route path="/product-search/:search" element={<SearchedProds/>} />

    </Routes>
  )
}

export default RouterConfig