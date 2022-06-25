import { configureStore } from '@reduxjs/toolkit'
import searchDataSlice from './searchDataSlice'

const store = configureStore({
  reducer: {
    searchData: searchDataSlice
  }
})

export default store
