// import { createContext, useState } from "react";

// const addCartItem = (cartItems, productToAdd)=>{
//   const existinItem = cartItems.find((cartItems)=> addCartItem.title === productToAdd.title)

//   if(existinItem){
//     return cartItems.map((cartItem)=>cartItem.id === productToAdd.id ? 
//     {...cartItem, quantity: cartItem.quantity + 1} : cartItem
//     )
//  }
//  return [...cartItems, {...productToAdd, quantity:1}]
// }

// export const CartContext = createContext({
//     cartItems: [],
//     addItemToCard: ()=>{}
//   })


//   export const CartProvider = ({children})=>{
//   const [cartItems, setCartItems] = useState([])

//   const addItemToCard = (productToAdd)=>{
//      setCartItems(addCartItem(cartItems, productToAdd))
//   }
//   const value = {cartItems, addItemToCard}

//   return (
//     <CartContext.Provider value={value}>
//      {children}
//     </CartContext.Provider>
//   )
// }