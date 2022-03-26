import { createSlice } from '@reduxjs/toolkit';
import { CREW, DESTINATION, TECHNOLOGY } from '../../constants';

const initialState = { destination: 'moon', crew: '', technology: '' };

const spaceTourismSlice = createSlice({
  name: 'SpaceTourism',
  initialState,
  reducers: {
    updateEntry: (state, action) => {
      const {
        payload: { type, value },
      } = action;
      switch (type) {
        case DESTINATION:
          state.destination = value;
          break;
        case CREW:
          state.crew = value;
          break;
        case TECHNOLOGY:
          state.technology = value;
          break;
        default:
      }
    },
  },
});

export const spaceTourismActions = spaceTourismSlice.actions;
export default spaceTourismSlice.reducer;
