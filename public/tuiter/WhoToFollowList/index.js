import followList from "./WhoToFollow.js";
const WhoToFollowList = () => {
    return(`
        <!--List Header-->
        <ul class="list-group">
            <li class="list-group-item fw-bold">
                Who to follow
            </li>
            <!--Who to Follow List-->    
            ${followList.map(listItem => 
                `<li class="list-group-item">
					<div class="d-flex align-items-center">
                        <!--Avatar Image-->
						<div class="flex-shrink-0 pe-2">
							<img class="wd-avatar-image wd-img-circle" 
							       src=${listItem.avatarIcon}/>
						</div>
						<!--Name and Handle-->
						<div class="flex-grow-1 align-items-start fw-bold text-truncate">
								${listItem.userName}
								${listItem.verified ? `<i class="fa fa-check-circle"></i>` : ""}
                            <div class="fw-normal">
								@${listItem.handle}
                            </div>
						</div>
						<!--Follow Button-->
						<div class="flex-shrink-0 align-items-end">
							<a class="btn btn-primary rounded-pill" href="#">Follow</a>
						</div>
					</div>
				</li>`
            ).join("")}
        </ul>
    `);
}

export default WhoToFollowList;