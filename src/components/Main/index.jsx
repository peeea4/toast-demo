import { MainWrapper } from "@/components/Main/styled";

import { PostList } from "../PostList";
import { UserList } from "../UserList";

export const Main = () => {
    return (
        <MainWrapper>
            <UserList />
            <PostList />
        </MainWrapper>
    );
};
