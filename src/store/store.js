import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import loggedReducer from '../reducers/logged'

export default configureStore({
  reducer: {
    logged:loggedReducer,
    counter: counterReducer
  }
})