import React from "react";
import TuitStats from "./tuit-stats";
import {deleteTuit} from "../reducers/tuit-feed-reducer";
import {useDispatch} from "react-redux";

const TuitItem = ({item, index}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return (
        <li className={'list-group-item'}>
            <div className={`d-flex py-1`}>
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
                            <span className="pe-1">{item.verified ? <i className="fa fa-check-circle text-primary"></i> : ""}</span>
                            @{item.handle} · {item.time}
                        </div>
                        <div className="flex-shrink-0 text-end">
                            <i className="bi bi-x-lg float-end"
                               onClick={() => deleteTuitHandler(item._id)}></i>
                        </div>
                    </div>

                    <div className=" my-1">{item.tuit}</div>

                    <TuitStats item={item} />
                </div>
            </div>
        </li>
    );
};
export default TuitItem;