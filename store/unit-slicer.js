import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { updateUnit } from "../services/unit";

export const updateUnitThunk = createAsyncThunk(
  "unit/updateUnitStatus",
  async (unitId, { getState, requestId }) => {
    const {
      startDate,
      endDate,
      reviewDate,
      completed,
      number,
      title,
      details,
      currentRequestId,
      loading,
    } = getState().unit;

    if (loading !== "pending" || requestId !== currentRequestId) {
      return;
    }

    const response = await updateUnit(unitId, {
      startDate,
      endDate,
      reviewDate,
      completed,
      number,
      title,
      details,
    });

    return response.data;
  }
);

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
    loading: "idle",
    error: null,
    currentRequestId: undefined,
  },
  reducers: {
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },

    setEndDate: (state, action) => {
      state.endDate = action.payload;
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
      state.id = action.payload.id;
      state.completed = action.payload.completed;
      state.details = action.payload.details;
    },
  },
  extraReducers: {
    [updateUnitThunk.pending]: (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
        state.currentRequestId = action.meta.requestId;
      }
    },

    [updateUnitThunk.fulfilled]: (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === "pending" && state.currentRequestId === requestId) {
        state.loading = "idle";
        console.log(action.payload);
        state.currentRequestId = undefined;
      }
    },

    [updateUnitThunk.rejected]: (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === "pending" && state.currentRequestId === requestId) {
        state.loading = "idle";
        state.error = action.error;
        state.currentRequestId = undefined;
      }
    },
  },
});

export const {
  setStartDate,
  setEndDate,
  setReviewDate,
  setUnit,
} = unitSlice.actions;

export default unitSlice.reducer;
