import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodo = createAsyncThunk("fetchTodos", async () => {
  const data = await fetch("http://localhost:5050/api/todos");
  const json = await data.json();
  //console.log(json);
  return json;
});

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isLoading: false,
    items: [],
    error: false,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchTodo.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    });

    builder.addCase(fetchTodo.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
