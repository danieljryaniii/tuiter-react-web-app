import React from "react";
import TuitItem from "./tuit-item";
    import {useSelector} from "react-redux";

    const TuitList = () => {
    const tuits = useSelector(state => state.tuit_feed);

    return (
        <ul className={'list-group'}>
            {
                tuits.map((post, index) => <TuitItem item={post} index={index} key={post._id} />)
            }
        </ul>
    );
};
export default TuitList;