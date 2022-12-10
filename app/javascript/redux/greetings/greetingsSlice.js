import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const url = 'http://localhost:3000/api/v1/messages';


export const getGreetings= createAsyncThunk('messages/getGreetings', async() => {
    const response = await axios.get(url);
    return response.data;

},);

const initialState = {
    messages: [],
    status: 'idle',
}

export const greetingsSlice = createSlice({
    name: 'greetings',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getGreetings.fulfilled, (state, action) => {
                state.greetings = action.payload
                state.status = 'succeeded'
        })
    },
})

export default greetingsSlice.reducer;