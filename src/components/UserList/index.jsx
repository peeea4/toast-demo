import { useDispatch, useSelector } from "react-redux";

import { getUserListAsync } from "@/actions/user";
import { User } from "@/components/User";
import { UserListWrapper } from "@/components/UserList/styled";

import { Button } from "../Main/styled";

export const UserList = () => {
    const usetList = useSelector((state) => state.userState.userList);
    const dispatch = useDispatch();
    const clickHandler = () => {
        dispatch(getUserListAsync());
    };

    return (
        <UserListWrapper>
            <Button onClick={clickHandler}>Get list of users</Button>
            {usetList.map((user) => (
                <User key={user.id} user={user} />
            ))}
        </UserListWrapper>
    );
};
