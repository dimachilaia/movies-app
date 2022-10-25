import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name:'cart',
  initialState:{
    itemsList: [],
    totalQuantity:0,
    selected:null
  },
  reducers:{
    addToCart(state, action){
      const newItem = action.payload;
      const existinItem = state.itemsList.find((item)=>item.title === newItem.title);
      if(existinItem){
        state.totalQuantity ++;
      }else{
        state.itemsList.push({title:newItem.title, quantity:1, image:newItem.image, category:newItem.category, year:newItem.year})
      }
    },
    deleteFunc(state, action){
      const itemId = action.payload
      state.itemsList = state.itemsList.filter((item)=>item.title !== itemId)
      console.log(itemId)
    }
  }
})

export const cartActions = CartSlice.actions
export default CartSlice