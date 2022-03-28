import { configureStore } from '@reduxjs/toolkit';
import spaceTourismReducer from '../slice/index';

const store = configureStore({
  reducer: spaceTourismReducer,
});

export default store;
