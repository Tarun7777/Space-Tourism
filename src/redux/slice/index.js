import { createSlice } from '@reduxjs/toolkit';
import { CREW, DESTINATION, TECHNOLOGY } from '../../constants';

const initialState = { destination: 'moon', crewId: '1', technologyId: '' };

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
          console.log(value);
          state.crewId = value;
          break;
        case TECHNOLOGY:
          state.technologyId = value;
          break;
        default:
      }
    },
  },
});

export const spaceTourismActions = spaceTourismSlice.actions;
export default spaceTourismSlice.reducer;
