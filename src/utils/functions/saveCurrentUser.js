import { setCurrentUser } from "../../store/userSlice";

const saveCurrentUser = (dispatch, navigate, response) => {
    dispatch(setCurrentUser(response));
    const visRoute = localStorage.getItem('redirectAfterLogin');
    const redirectTo = visRoute || '/browse';
    navigate(redirectTo);
    localStorage.setItem('redirectAfterLogin', '');
}

export default saveCurrentUser;