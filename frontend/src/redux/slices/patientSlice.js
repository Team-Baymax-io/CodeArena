import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  patientList: [],
  selectedPatient: null,
};

const patientSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {
    setPatients: (state, action) => {
      state.patientList = action.payload;
    },
    selectPatient: (state, action) => {
      state.selectedPatient = action.payload;
    },
    addPatient: (state, action) => {
      state.patientList.push(action.payload);
    },
  },
});

export const { setPatients, selectPatient, addPatient } = patientSlice.actions;
export default patientSlice.reducer;
