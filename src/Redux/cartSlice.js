import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "store",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
      // vanila(older)Redux version =>Dont mutate

      // in older day the state is not allowed to mutate
      // so we have to create a local state/temporary state
      // and push the state to main state and make change to it
      // but now we can mutate the state
      // like=>  state.items.push(action.payload);
      // const newState=[...state];
      // newState.items.push(action.payload);
      // return newState
      // Redux Toolkit uses immer BTS
    },
    removeItems: (state, action) => {
      state.items.splice(action.payload, 1);
      //originalState = {items: ["pizza"]}
    },
    clearCart: (state) => {
      //RTK - either Mutate the existing  state or return a new State
      // state.items.length = 0; // originalState = []
      // to console the main state we use console.log(current(state))
      return { items: [] }; // this new object will be replaced inside originalState = { items: [] }
    },
  },
});

export const { addItems, removeItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
