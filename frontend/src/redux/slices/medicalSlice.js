import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  records: [], // {id, patientId, type: "prescription" | "report", data, date}
};

const medicalSlice = createSlice({
  name: "medical",
  initialState,
  reducers: {
    setRecords: (state, action) => {
      state.records = action.payload;
    },
    addRecord: (state, action) => {
      state.records.push(action.payload);
    },
    deleteRecord: (state, action) => {
      state.records = state.records.filter((r) => r.id !== action.payload);
    },
  },
});

export const { setRecords, addRecord, deleteRecord } = medicalSlice.actions;
export default medicalSlice.reducer;
