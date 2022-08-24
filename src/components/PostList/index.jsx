import { useSelector } from "react-redux";

import { Post } from "../Post";
import { PostListWrapper } from "./styled";

export const PostList = () => {
    const postList = useSelector((state) => state.postState?.postList[0]);

    return (
        <PostListWrapper>
            {postList?.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </PostListWrapper>
    );
};
