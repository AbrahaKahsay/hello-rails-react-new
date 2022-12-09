import axios from "axios"
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'http://localhost:3000/api/v1/messages';

export const fetchGreeting = createAsyncThunk('messages/fetchGreeting', async () => {
    const response = await axios.get(url);
    return response.data;
  });

export const greetingsSlice = createSlice({
    name: 'greetings',
    initialState: {
      greetings: [],
      status: 'idle',
    },
    reducers: {},
    extraReducers(builder) {
      builder.addCase(fetchGreeting.fulfilled, (state, action) => {
        state.greetings = action.payload; 
        state.status = 'succeeded'; 

        console.log(state.greetings)
      });
    },
  });

  export default greetingsSlice.reducer;