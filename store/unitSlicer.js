import { createSlice } from "@reduxjs/toolkit";

export const unitSlice = createSlice({
  name: "unit",
  initialState: {
    completed: false,
    details: null,
    id: null,
    number: null,
    reviewDate: "",
    startDate: "",
    endDate: "",
    subjectId: null,
    title: "",
  },
  reducers: {
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },

    setEndDate: (state, action) => {
      state.startDate = action.payload;
    },

    setReviewDate: (state, action) => {
      state.reviewDate = action.payload;
    },

    setUnit: (state, action) => {
      state.startDate = action.payload.startDate;
      state.endDate = action.payload.endDate;
      state.reviewDate = action.payload.reviewDate;
      state.number = action.payload.number;
      state.title = action.payload.title;
    },
  },
});

export const {
  setStartDate,
  setEndDate,
  setReviewDate,
  setUnit,
} = unitSlice.actions;

export const selectUnit = (state) => state.unit;
export const selectStartDate = (state) => state.unit.startDate;
export const selectEndDate = (state) => state.unit.endDate;
export const selectReviewDate = (state) => state.unit.reviewDate;

export default unitSlice.reducer;
