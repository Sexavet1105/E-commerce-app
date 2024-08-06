import React from 'react'
import { useState } from 'react';
import '../css/Header.css'
import { CiShoppingBasket } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";
import { IoMoon } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawer } from '../redux/slices/basketSlice';


function Header() {
  const dispatch = useDispatch()
  const [theme ,setTheme] =useState(false)
  const navigate = useNavigate()
  const {Basketproducts} = useSelector((store)=> store.basket)
  const {products} = useSelector((store)=> store.product)

  const changeTheme =()=>{
    const root = document.getElementById("root")
      if(!theme){
        root.style.backgroundColor ="black"
        root.style.color="#fff"
      }else{
        root.style.backgroundColor ="#fff"
        root.style.color="black"
      }
      setTheme(!theme)
    }
    const searchedProd =(search)=>{
      if(search==''){
        navigate('/')
      }else{
      navigate(`/product-search/${search}`)
      }
    }
  return (
    <div style={{display:'flex',flexDirection:'row',alignItems:"center",justifyContent:"space-between"}}>
      <div className='flex-row'>
        <img className="logo" onClick={()=> navigate("/")} src="./src/assets/images/logo.png"/>
        <p className='logoText'>E-commerce</p>
      </div>
      <div className='flex-row'>
        <input className="inputSearch"type="text" onChange={(e)=>searchedProd(e.target.value)} placeholder='Search'/>
        <div>
        {
            theme ? <IoMoon onClick={changeTheme} className='icon'/>:<MdOutlineLightMode onClick={changeTheme} className='icon'/>
          }
          <Badge  onClick={()=> dispatch(setDrawer())} badgeContent={Basketproducts.length} color="error">
          <CiShoppingBasket style={{marginRight:6}} className='icon' />
          </Badge>
        </div>
        
      </div>
    </div>
  )
}

export default Header
