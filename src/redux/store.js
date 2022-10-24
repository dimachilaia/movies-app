import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import CartSlice from "./CartSlice";

const store = configureStore({
 reducer:{cart:CartSlice.reducer, auth:AuthSlice.reducer}
})

export default store