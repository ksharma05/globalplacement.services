import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from '../features/jobs/jobsSlice';
import slidesReducer from '../features/slides/slideSlice';
import contentReducer from '../features/content/contentSlice';

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    slides: slidesReducer,
    content: contentReducer,
  },
});

export default store;