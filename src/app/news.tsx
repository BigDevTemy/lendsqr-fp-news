import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const newsDataSlice = createSlice({
  name: "news",
  initialState: {
    news: null
  },
  reducers: {
    setNewsData(state, action) {
        state.news = action.payload
      },
      clearNewsData(state,action){
        state.news=null
      }
    
    
  }
})

export const { setNewsData,clearNewsData } = newsDataSlice.actions
export default newsDataSlice.reducer