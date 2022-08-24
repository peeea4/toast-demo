import { PostBody, PostTitle, PostWrapper } from "./styled";

export const Post = ({ post }) => {
    return (
        <PostWrapper>
            <PostTitle>{post.title}</PostTitle>
            <PostBody>{post.body}</PostBody>
        </PostWrapper>
    );
};
