import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appointments: [], // {id, patientId, doctorId, date, status}
};

const appointmentSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    setAppointments: (state, action) => {
      state.appointments = action.payload;
    },
    addAppointment: (state, action) => {
      state.appointments.push(action.payload);
    },
    updateAppointmentStatus: (state, action) => {
      const { id, status } = action.payload;
      const appointment = state.appointments.find((a) => a.id === id);
      if (appointment) {
        appointment.status = status;
      }
    },
  },
});

export const { setAppointments, addAppointment, updateAppointmentStatus } =
  appointmentSlice.actions;
export default appointmentSlice.reducer;
