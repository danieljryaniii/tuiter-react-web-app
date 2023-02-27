import React from "react";

const PostListItem = ({item, index}) => {
    return (
        <div className={`d-flex ${index === 0 ? 'pb-3' : 'py-3'} px-3 border-bottom border-end border-start`}>
            <div className="flex-shrink-0 me-3">
                <img
                    className={"rounded-circle"}
                    width={48}
                    height={48}
                    src={`/images/${item.avatarIcon}`}
                />
            </div>

            <div className="flex-grow-1">
                <div className="d-flex">
                    <div className="flex-grow-1">
                        <span className="fw-bold pe-1">
                            {item.userName}
                        </span>
                        <span className="pe-1">{item.userVerified ? <i className="fa fa-check-circle"></i> : ""}</span>
                        @{item.userHandle} · {item.date}
                    </div>
                    <div className="flex-shrink-0 text-end">
                        <i className="fa-solid fa-ellipsis fa-lg"></i>
                    </div>
                </div>

                <div className=" my-1">{item.mainContent}</div>

                <div className="card my-3 rounded-4">
                    <img className="card-img-top border-bottom border-light rounded-bottom rounded-4" height="350" src={`/images/${item.linkedContentImage}`} alt="Card image cap"/>
                        <div className="card-body">
                            <div>{item.linkedContentHeader}</div>
                            <p className="m-0">{item.linkedContentBody}</p>
                            <a href="#" className="text-decoration-none text-dark">
                                <i className="fa-solid fa-link"></i> {item.linkedContentLink}
                            </a>
                        </div>
                </div>

                <div className="d-flex justify-content-between pe-5">
                    <a className="text-secondary text-decoration-none" href="#">
                        <i className="fa-regular fa-comment"></i>
                        <span className="ms-2">{item.comments}</span>
                    </a>
                    <a className="text-secondary text-decoration-none" href="#">
                        <i className="fa-solid fa-retweet"></i>
                        <span className="ms-2">{item.retuits}</span>
                    </a>
                    <a className="text-secondary text-decoration-none" href="#">
                        <i className="fa-regular fa-heart"></i>
                        <span className="ms-2">{item.likes}</span>
                    </a>
                    <a className="text-secondary text-decoration-none" href="#">
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};
export default PostListItem;