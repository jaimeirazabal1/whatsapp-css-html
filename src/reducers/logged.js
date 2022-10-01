import { createSlice } from '@reduxjs/toolkit'

export const logged = createSlice({
  name: 'logged',
  initialState: {
    isLogged:false,
    user: {}
  },
  reducers: {
    login: (state, action) => {
      console.log(action.payload)
      // user:action.payload
      return {
        ...state,
        isLogged:true,
        user:action.payload
      }
    },
    logout: state => {
      
    },
    getUser: (state, action) => {
      
    }
  }
})

// Action creators are generated for each case reducer function
export const { login, logout, getUser } = logged.actions

export default logged.reducer