import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  active:false,
  dark:localStorage.getItem("dark")?localStorage.getItem("dark") == "true"?true:false:false,
  ltr:localStorage.getItem("ltr")?localStorage.getItem("ltr") == "true"?true:false:true,
}

export const BarSlice = createSlice({
  name: 'bars',
  initialState,
  reducers: {
    handleActive :(state,action)=>{
          state.active = action.payload
    },

    handleDark :(state,action)=>{
      state.dark = action.payload
}
,

    handleDirction :(state,action)=>{
      state.ltr = action.payload
}
  },
})

export const {handleActive,handleDark,handleDirction} = BarSlice.actions

export default BarSlice.reducer