import { configureStore } from '@reduxjs/toolkit'
import greetingsReducer from './reducers/greeting/greeting'


const store = configureStore({
    reducer: {
      greeting: greetingsReducer
    }
})

export default store