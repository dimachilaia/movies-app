import React from 'react'
import MovieRoutes from './MovieRoutes'
// import Input from './Input'
import { useSelector } from 'react-redux'

const Bookmarked = () => {
  const cart = useSelector((state)=>state.cart.itemsList)

  return (
    <div style={{display:'flex'}}>
        <MovieRoutes/>
        <p style={{color:'blue'}}>bookmarked</p>
        
        {cart.map((item)=>{
          return <div style={{color:'white'}}>
          <img src={item.image} alt="image"/>
           <p>{item.year}</p>
           <p>{item.category}</p>
           <p>{item.title}</p>
          </div>
        })}
    </div>
  )
}

export default Bookmarked