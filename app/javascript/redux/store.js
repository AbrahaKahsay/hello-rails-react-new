import greetingsReducer from './reducers/greeting/greetingSlice'


export default store({
    reducer: {
      greeting: greetingsReducer
    }
})
