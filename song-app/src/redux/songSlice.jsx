import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSongs = createAsyncThunk('songs/fetchSongs', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
});

export const addSong = createAsyncThunk('songs/addSong', async (song) => {
  const response = await axios.post('https://jsonplaceholder.typicode.com/posts', song);
  return response.data;
});

export const updateSong = createAsyncThunk('songs/updateSong', async (song) => {
  const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${song.id}`, song);
  return response.data;
});

export const deleteSong = createAsyncThunk('songs/deleteSong', async (id) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return id;
});

const songSlice = createSlice({
  name: 'songs',
  initialState: { data: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSongs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchSongs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addSong.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(updateSong.fulfilled, (state, action) => {
        const index = state.data.findIndex((song) => song.id === action.payload.id);
        state.data[index] = action.payload;
      })
      .addCase(deleteSong.fulfilled, (state, action) => {
        state.data = state.data.filter((song) => song.id !== action.payload);
      });
  },
});
export const { reducer: songReducer } = songSlice;