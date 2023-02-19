import followList from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return(`
        <!--List Header-->
        <ul class="list-group">
            <li class="list-group-item fw-bold">
                Who to follow
            </li>
            <!--Who to Follow List-->    
            ${followList.map(listItem => WhoToFollowListItem(listItem)).join("")}
        </ul>
    `);
}

export default WhoToFollowList;

