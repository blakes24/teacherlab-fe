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
      planning,
      collaboration,
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
      planning,
      collaboration,
    });

    return response.data;
  }
);

export const unitSlice = createSlice({
  name: "unit",
  initialState: {
    completed: false,
    subjectName: "",
    planning: {
      standards: [],
      objectives: "",
      assessments: {
        formative: [],
        summative: [],
      },
    },
    collaboration: { answers: {}, reflection: "" },
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
      state.planning.objectives = action.payload;
    },

    setStandards: (state, action) => {
      state.planning.standards.unshift(...action.payload);
    },

    removeStandard: (state, action) => {
      state.planning.standards.splice(action.payload.index, 1);
    },

    addAssessment: (state, action) => {
      state.planning.assessments[action.payload.assessmentType].push(
        action.payload.assessment
      );
    },

    updateAssessment: (state, action) => {
      state.planning.assessments[action.payload.assessmentType][
        action.payload.index
      ][action.payload.field] = action.payload.value;
    },

    removeAssessment: (state, action) => {
      state.planning.assessments[action.payload.assessmentType].splice(
        action.payload.index,
        1
      );
    },

    addAnswer: (state, action) => {
      state.collaboration.answers[action.payload.id] = action.payload.value;
    },

    setReflection: (state, action) => {
      state.collaboration.reflection = action.payload;
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
      state.planning.objectives = unit.planning?.objectives || "";
      state.planning.standards = unit.planning?.standards || [];
      state.planning.assessments.formative =
        unit.planning?.assessments?.formative || [];
      state.planning.assessments.summative =
        unit.planning?.assessments?.summative || [];
      state.collaboration.answers = unit.collaboration.answers || {};
      state.collaboration.reflection = unit.collaboration.reflection || "";
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
  addAnswer,
  setReflection,
  setUnit,
} = unitSlice.actions;

export default unitSlice.reducer;
