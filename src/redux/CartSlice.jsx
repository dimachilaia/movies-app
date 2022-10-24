import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name:'cart',
  initialState:{
    itemsList: [],
    totalQuantity:0
  },
  reducers:{
    addToCart(state, action){
      const newItem = action.payload;
      const existinItem = state.itemsList.find((item)=>item.title === newItem.title);
      if(existinItem){
        state.totalQuantity ++;
        // existinItem.totalQuantity += newItem.price
      }else{
        state.itemsList.push({title:newItem.title, quantity:1, image:newItem.image, category:newItem.category, year:newItem.year})
      }
    }
  }
})

export const cartActions = CartSlice.actions
export default CartSlice