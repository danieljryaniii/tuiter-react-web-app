const WhoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item">
            <div class="d-flex align-items-center">
                <!--Avatar Image-->
                <div class="flex-shrink-0 pe-2">
                    <img class="wd-avatar-image wd-img-circle" 
                           src=${who.avatarIcon}/>
                </div>
                <!--Name and Handle-->
                <div class="flex-grow-1 align-items-start fw-bold text-truncate">
                        ${who.userName}
                        ${who.verified ? `<i class="fa fa-check-circle"></i>` : ""}
                    <div class="fw-normal">
                        @${who.handle}
                    </div>
                </div>
                <!--Follow Button-->
                <div class="flex-shrink-0 align-items-end">
                    <a class="btn btn-primary rounded-pill" href="#">Follow</a>
                </div>
            </div>
        </li>
    `);
}
export default WhoToFollowListItem;