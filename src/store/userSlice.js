import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user:{},
    isMobileView: window.innerWidth < 768,
    isSidebarOpen: false,
    isRecoveryModalOpen: false,
    recoveryCode:'',
    isMfaRequired: false,
    challengeId: '',
    otpFromUser: '',
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
        },
        setIsRecoveryModalOpen: (state, action) => {
            state.isRecoveryModalOpen = action.payload;
        },
        setRecoveryCode: (state, action) => {
            state.recoveryCode = action.payload;
        },
        setIsMfaRequired: (state, action) => {
            state.isMfaRequired = action.payload;
        },
        setChallengeId: (state, action) => {
            state.challengeId = action.payload;
        },
        setOtpFromUser: (state, action) => {
            state.otpFromUser = action.payload;
        }
    }
})

export const {setCurrentUser, setOtpFromUser, setChallengeId, removeUser, setIsMfaRequired, setIsMobileView, toggleSidebarStatus, setIsRecoveryModalOpen, setRecoveryCode, challengeId} = userSlice.actions;

export default userSlice.reducer;