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
    subjectName: "",
    details: {
      standards: [],
      objectives: "",
      assessments: {
        formative: [],
        summative: [],
      },
    },
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
    setId: null,
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

    setObjectives: (state, action) => {
      state.details.objectives = action.payload;
    },

    setStandards: (state, action) => {
      state.details.standards.unshift(...action.payload);
    },

    removeStandard: (state, action) => {
      state.details.standards.splice(action.payload.index, 1);
    },

    addAssessment: (state, action) => {
      state.details.assessments[action.payload.assessmentType].push(
        action.payload.assessment
      );
    },

    updateAssessment: (state, action) => {
      state.details.assessments[action.payload.assessmentType][
        action.payload.index
      ][action.payload.field] = action.payload.value;
    },

    removeAssessment: (state, action) => {
      state.details.assessments[action.payload.assessmentType].splice(
        action.payload.index,
        1
      );
    },

    setUnit: (state, action) => {
      const unit = action.payload;

      state.startDate = unit.startDate;
      state.endDate = unit.endDate;
      state.reviewDate = unit.reviewDate;
      state.number = unit.number;
      state.subjectName = unit.subjectName;
      state.title = unit.title;
      state.id = unit.id;
      state.completed = unit.completed;
      state.details.objectives = unit.details.objectives || "";
      state.details.standards = unit.details.standards || [];
      state.details.assessments.formative =
        unit.details.assessments?.formative || [];
      state.details.assessments.summative =
        unit.details.assessments?.summative || [];
      state.setId = unit.setId;
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
  setObjectives,
  setStandards,
  removeStandard,
  addAssessment,
  updateAssessment,
  removeAssessment,
  setUnit,
} = unitSlice.actions;

export default unitSlice.reducer;
