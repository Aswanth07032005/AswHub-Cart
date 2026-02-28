import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    product: JSON.parse(localStorage.getItem("product")) || [],
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
    addedProducts: JSON.parse(localStorage.getItem("addedProduct")) || [],
    error: null,
    loading: false,
  },
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
      localStorage.setItem("product", JSON.stringify(state.product));
    },
    addCartItems: (state, action) => {
      const findItem = state.cartItems.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (findItem !== -1) {
        state.cartItems[findItem].quantity++;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    minusButton: (state, action) => {
      const findItem = state.cartItems.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (findItem !== -1) {
        state.cartItems[findItem].quantity--;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    plusButton: (state, action) => {
      const findItem = state.cartItems.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (findItem !== -1) {
        state.cartItems[findItem].quantity++;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    removeButton: (state, action) => {
      const findItem = state.cartItems.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (findItem !== -1) {
        state.cartItems.splice(findItem, 1);
        localStorage.removeItem("cartItems");
      }
    },
    addProducts: (state, action) => {
      state.addedProducts.push(action.payload);
      localStorage.setItem("addedProduct", JSON.stringify(state.addedProducts));
    },
    updateProduct: (state, action) => {
      const productItemFind = state.addedProducts.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (productItemFind !== -1) {
        state.addedProducts[productItemFind] = action.payload;

        localStorage.setItem(
          "addedProduct",
          JSON.stringify(state.addedProducts),
        );
      }
    },
     removeProduct: (state, action) => {
      const findItem = state.addedProducts.findIndex(
        (item) => item.id === action.payload
       
        
      );
       console.log(findItem)

          if (findItem !== -1) {
        state.addedProducts.splice(findItem, 1);
        localStorage.removeItem("addedProduct");
      }
    },
  },
});

export default productSlice.reducer;
export const {addProducts,removeProduct,updateProduct,setProduct,addCartItems,minusButton,plusButton,removeButton,} = productSlice.actions;
