const PostItem = (item, index) => {
    return (`
        <!-- Content Container-->
        <div class="d-flex ${index === 0 ? 'pb-3' : 'py-3'} px-3 border-bottom border-end border-start border-secondary">
            <div class="flex-shrink-0 me-3">
                <img 
                    class="wd-img-circle wd-avatar-image" 
                    src=${item.avatarIcon}
                />
            </div>
            
            <div class="flex-grow-1">
                <div class="d-flex">
                    <div class="flex-grow-1">
                        <span class="fw-bold text-white">
                            ${item.userName}
                        </span>
                        <span class="text-white pe-1">${item.userVerified ? `<i class="fa fa-check-circle"></i>` : ""}</span> 
                        @${item.userHandle} · ${item.date}
                    </div>
                    <div class="flex-shrink-0 text-end">
                        <i class="fa-solid fa-ellipsis fa-lg"></i>
                    </div>
                </div>
                
                <div class="text-white my-1">${item.mainContent}</div>
				
				<div class="card border-secondary my-3">
                    <img class="card-img-top border-bottom border-secondary" height="350" src=${item.linkedContentImage} alt="Card image cap">
                    <div class="card-body">
                        <div class="text-white">${item.linkedContentHeader}</div>
                        <p class="m-0">${item.linkedContentBody}</p>
                        <a href="#" class="text-decoration-none text-dark">
                            <i class="fa-solid fa-link"></i> ${item.linkedContentLink}
                        </a>
                    </div>
                </div>
                
                <div class="d-flex justify-content-between pe-5 wd-post-links">
                    <!-- Comment Link -->
                    <a class="text-dark" href="#">
                        <i class="fa-regular fa-comment"></i>
                        <span class="ms-2">${item.comments}</span>
                    </a>

                    <!-- Retuit Link -->
                    <a class="text-dark" href="#">
                        <i class="fa-solid fa-retweet"></i>
                        <span class="ms-2">${item.retuits}</span>
                    </a>		
                    <!-- Like Link -->
                    <a class="text-dark" href="#">
                        <i class="fa-regular fa-heart"></i>
                        <span class="ms-2">${item.likes}</span>
                    </a>
                    <!-- Share Link -->
                    <a class="text-dark" href="#">
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>                
                </div>
            </div>
        </div>
    `);
}
export default PostItem;