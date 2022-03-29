import { configureStore } from '@reduxjs/toolkit';
import spaceTourismReducer from '../slice/spaceTourism';
import loadingReducer from '../slice/loader';

const store = configureStore({
  reducer: { spaceTourism: spaceTourismReducer, loading: loadingReducer },
});

export default store;
