import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuit-thunks";

const TuitStats = ({item}) => {
    const dispatch = useDispatch();
    const handleLikeToggle = (tuit) => {
        dispatch(updateTuitThunk(
            {...tuit,
                likes: tuit.liked ? tuit.likes - 1 : tuit.likes + 1,
                liked: !tuit.liked
            }
        ));
    };

    const handleDislikeToggle = (tuit) => {
        dispatch(updateTuitThunk(
            {...tuit,
                dislikes: tuit.disliked ? tuit.dislikes - 1 : tuit.dislikes + 1,
                disliked: !tuit.disliked
            }
        ));
    };

    return (
        <div className="d-flex justify-content-between pe-5">
            <a className="text-secondary text-decoration-none" href="#">
                <i className="fa-regular fa-comment"></i>
                <span className="ms-2">{item.replies}</span>
            </a>
            <a className="text-secondary text-decoration-none" href="#">
                <i className="fa-solid fa-retweet"></i>
                <span className="ms-2">{item.retuits}</span>
            </a>
            <button onClick={() => handleLikeToggle(item)} className="text-secondary bg-white border-0">
                {item.liked ? <i className="fa-solid fa-heart text-danger"></i> : <i className="fa-regular fa-heart"></i>}
                <span className="ms-2">{item.likes}</span>
            </button>
            <button onClick={() => handleDislikeToggle(item)} className="text-secondary bg-white border-0">
                {item.disliked ? <i className="fa-solid fa-thumbs-down text-warning"></i> : <i className="fa-regular fa-thumbs-down"></i>}
                <span className="ms-2">{item.dislikes}</span>
            </button>
            <a className="text-secondary text-decoration-none" href="#">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
        </div>
    );
};

export default TuitStats;
