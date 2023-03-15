import React from "react";
import WhoToFollowListItem from "./who-to-follow-list-item";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const whoData = useSelector(state => state.who);
    return (
          <ul className={"list-group"}>
              <li className={"list-group-item"}>
                  <h3>Who to follow</h3>
              </li>
              {
                  whoData.map(item => {
                      return (<WhoToFollowListItem who={item} key={item._id}/>);
                  })
              }
          </ul>
  );
};
export default WhoToFollowList;