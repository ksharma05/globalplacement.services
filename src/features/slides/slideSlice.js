import { createSlice } from '@reduxjs/toolkit';
import heroImg1 from '../../assets/heroImg1.jpg';
import heroImg01 from '../../assets/heroImg01.jpg';
import heroImg02 from '../../assets/heroImg02.jpg';

const slideSlice = createSlice({
  name: 'slides',
  initialState: {
    imageUrls: [heroImg1, heroImg01, heroImg02],
  },
  reducers: {},
});

export default slideSlice.reducer;
