import { createSlice } from '@reduxjs/toolkit';
import { CREW, DESTINATION, TECHNOLOGY } from '../../constants';

const initialState = { destinationId: '1', crewId: '1', technologyId: '1' };

const spaceTourismSlice = createSlice({
  name: 'SpaceTourism',
  initialState,
  reducers: {
    updateEntry: (state, action) => {
      const {
        payload: { type, id },
      } = action;
      switch (type) {
        case DESTINATION:
          state.destinationId = id;
          break;
        case CREW:
          state.crewId = id;
          break;
        case TECHNOLOGY:
          state.technologyId = id;
          break;
        default:
      }
    },
  },
});

export const spaceTourismActions = spaceTourismSlice.actions;
export default spaceTourismSlice.reducer;
