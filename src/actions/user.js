import { SET_USER_LIST } from "@/constants/actions";

export const setUserList = (userList) => ({
    type: SET_USER_LIST,
    payload: userList,
});

export const getUserListAsync = () => (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => dispatch(setUserList(json)));
};
