import { useDispatch } from "react-redux";

import { getPostListAsync } from "@/actions/post";

import { Button } from "../Main/styled";
import { UserInfo, UserName, UserWrapper } from "./styled";

export const User = ({ user }) => {
    const dispatch = useDispatch();

    const clickHandle = (id) => () => {
        dispatch(getPostListAsync(id));
    };

    return (
        <UserWrapper>
            <UserInfo>
                <UserName>{user.name}</UserName>
            </UserInfo>
            <Button onClick={clickHandle(user.id)}>Get posts</Button>
        </UserWrapper>
    );
};
