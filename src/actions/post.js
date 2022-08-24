import { useToast } from "@peeea4/toast-lib";

import { SET_POST_LIST } from "@/constants/actions";

export const setPostList = (userList) => ({
    type: SET_POST_LIST,
    payload: userList,
});

export const getPostListAsync = (userId) => {
    const { success } = useToast();
    return (dispatch) => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then((response) => response.json())
            .then((json) => {
                dispatch(setPostList(json));
                success("Title");
            });
    };
};
