import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from '../features/jobs/jobsSlice';
import slidesReducer from '../features/slides/slideSlice';

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    slides: slidesReducer,
  },
});

export default store;