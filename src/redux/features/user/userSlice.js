import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: "Mir Hussain",
    email: "mir@fmail.com",
    userTasks: [],
};

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {

    },
});

export const { } = userSlice.actions;

export default userSlice.reducer;