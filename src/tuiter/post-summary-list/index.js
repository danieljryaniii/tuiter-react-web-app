import React from "react";
import postArray from './posts.json';
import PostSummaryItem from "./post-summary-item";

const PostSummaryList = () => {
    return (
        <ul className={"list-group"}>
            {
                postArray.map(post => {
                    return (<PostSummaryItem post={post} key={post._id}/>);
                })
            }
        </ul>
    );
};
export default PostSummaryList;