import React from "react";

const WhoToFollowListItem = (
    {
        who = { userName: "NASA", handle: "NASA", avatarIcon: "nasa.jpeg", verified: true }
    }
) => {
    return (
        <li className="list-group-item">
            <div className="d-flex align-items-center">
                <div className="flex-shrink-0 pe-2">
                    <img className="rounded-circle" height={48} width={48} src={`/images/${who.avatarIcon}`}/>
                </div>
                <div className="flex-grow-1 align-items-start fw-bold text-truncate">
                    <span className={"pe-1"}>
                        {who.userName}
                    </span>
                    {who.verified ? <i className="fa fa-check-circle"></i> : ""}
                    <div className="fw-normal">
                        @{who.handle}
                    </div>
                </div>
                <div className="flex-shrink-0 align-items-end">
                    <button className="btn btn-primary rounded-pill">Follow</button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;