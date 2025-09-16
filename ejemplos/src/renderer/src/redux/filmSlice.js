// redux/filmSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Traer todas las películas desde la base de datos usando la ruta proxy
export const fetchFilms = createAsyncThunk('films/fetchFilms', async () => {
  // Usa /api/films en minúsculas porque tu backend expone /films
  const response = await axios.get('/api/films'); 
  return Array.isArray(response.data) ? response.data : [];
});

const filmSlice = createSlice({
  name: 'films',
  initialState: {
    items: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchFilms.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default filmSlice.reducer;
