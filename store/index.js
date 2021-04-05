import { configureStore } from '@reduxjs/toolkit';
import unitReducer from "../store/unitSlicer";

export default configureStore({
  reducer: {
    unit: unitReducer,
  },
});
