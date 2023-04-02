import React, {useEffect} from "react";
import TuitItem from "./tuit-item";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from "../../services/tuit-thunks";

    const TuitList = () => {
    const {tuits, loading} = useSelector(state => state.tuitData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findTuitsThunk())
    }, []);

    return (
        <ul className={'list-group'}>
            {
                loading &&
                <li className={'list-group-item'}>
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    Loading...
                </li>
            }
            {
                !loading &&
                tuits.map((post, index) => <TuitItem item={post} index={index} key={post._id} />)
            }
        </ul>
    );
};
export default TuitList;