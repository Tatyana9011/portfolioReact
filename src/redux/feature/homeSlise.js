// redux/features/homeSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk('home/fetchData', async () => {
  const res = await axios.get('/api/some-data');
  return res.data;
});

const homeSlice = createSlice({
  name: 'home',
  initialState: { data: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, state => { state.loading = true; })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      });
  },
});

export default homeSlice.reducer;