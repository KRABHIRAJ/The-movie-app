import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user:{},
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.user = {... action.payload}
        },
        removeUser: (state) => {
            state.user = {};
        }
    }
})

export const {setCurrentUser, removeUser} = userSlice.actions;

export default userSlice.reducer;