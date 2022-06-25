import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getSearchData } from '../api/comics'

const searchDataSlice = createSlice({
  name: 'search-data',
  initialState: {
    listData: [],
    pageSize: 10,
    pageNum: 1
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSearchData.fulfilled, (state, action) => {
      state.listData = action.payload
    })
  }
})

const fetchSearchData = createAsyncThunk(
  'search-data/fetchSearchData',
  async (option) => {
    const response = await getSearchData(option)
    return response
  }
)

const { actions, reducer } = searchDataSlice

export const {} = actions

export default reducer
