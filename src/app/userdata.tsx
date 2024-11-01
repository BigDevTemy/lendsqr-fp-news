import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const userDataSlice = createSlice({
  name: "userdata",
  initialState: {
    userdata: null
  },
  reducers: {
    setUserData(state, action) {
        state.userdata = action.payload
      },
      clearUserData(state,action){
        state.userdata=null
      }
    
    
  }
})

export const { setUserData,clearUserData } = userDataSlice.actions
export default userDataSlice.reducer