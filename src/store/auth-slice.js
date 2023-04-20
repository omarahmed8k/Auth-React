import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        access: localStorage.getItem("access") === "true" ? true : false,
    },
    reducers: {
        login(state, action) {
            localStorage.setItem("access", action.payload.access);
            state.access = localStorage.getItem("access");
        },

        logout(state) {
            localStorage.removeItem("access");
            state.access = localStorage.getItem("access");
        },
    },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;