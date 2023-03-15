import React from "react";
import PostSummaryItem from "./post-summary-item";
import {useSelector} from "react-redux";

const PostSummaryList = () => {
    const postArray = useSelector(state => state.tuit);
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