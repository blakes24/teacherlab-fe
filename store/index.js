import { configureStore } from '@reduxjs/toolkit';
import unitReducer from "../store/unit-slicer";

export default configureStore({
  reducer: {
    unit: unitReducer,
  },
  devTools: true,
});
