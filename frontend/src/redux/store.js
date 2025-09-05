import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import patientReducer from "./slices/patientSlice";
import appointmentReducer from "./slices/appointmentSlice";
import medicalReducer from "./slices/medicalSlice";
import uiReducer from "./slices/uiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    patients: patientReducer,
    appointments: appointmentReducer,
    medical: medicalReducer,
    ui: uiReducer,
  },
});
