// eslint-disable-next-line no-unused-vars
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const signinUrl = 'http://127.0.0.1:3001/login';
// const signupUrl = 'http://127.0.0.1:3001/signup';

const initialState = {
  userContent: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: [],
});

export default userSlice.reducer;
