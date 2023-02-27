import React from "react";

const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.jpeg"
        }
    }
) => {
    return (
        <li className="list-group-item p-0">
            <div className="d-flex mx-3 my-2 align-items-start">
                <div className="flex-grow-1 me-3">
                    <div>@{post.userName} · {post.time}</div>
                    <div className="fw-bold">{post.topic}</div>
                    <div>{post.title}</div>
                </div>
                <div className="flex-shrink-0">
                    <img className="rounded-3" height={85} width={85} src={`/images/${post.image}`}/>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;