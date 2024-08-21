import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user:{},
    isMobileView: window.innerWidth < 768,
    isSidebarOpen: false,
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
        },
        setIsMobileView: (state, action) => {
            state.isMobileView = action.payload;
        },
        toggleSidebarStatus:(state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        }
    }
})

export const {setCurrentUser, removeUser, setIsMobileView, toggleSidebarStatus} = userSlice.actions;

export default userSlice.reducer;