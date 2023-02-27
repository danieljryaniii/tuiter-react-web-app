import React from "react";
import PostListItem from "./post-list-item";
import Posts from './posts.json';

const PostList = () => {
    return (
    <>
        {
            Posts.map((post, index) => <PostListItem item={post} index={index} key={post._id} />)
        }
    </>
    );
};
export default PostList;