import { configureStore } from '@reduxjs/toolkit';
import unitReducer from "../store/unit-slicer";
import userSlicer from "../store/user-slicer";

export default configureStore({
  reducer: {
    unit: unitReducer,
    user: userSlicer,
  },
  devTools: true,
});
