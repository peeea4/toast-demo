import { SET_POST_LIST } from "@/constants/actions";

const initialState = {
    postList: [],
};

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POST_LIST:
            return {
                ...state,
                postList: [...state.postList, action.payload],
            };

        default:
            return state;
    }
};
