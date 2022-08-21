import { SET_USER_LIST } from "@/constants/actions";

const initialState = {
    userList: [],
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_LIST:
            return {
                ...state,
                userList: [...state.userList, ...action.payload],
            };

        default:
            return state;
    }
};
