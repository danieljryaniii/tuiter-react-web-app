const PostItem = (item) => {
    return (`
        <!-- Content Container-->
        <div class="d-flex">
            <div class="flex-shrink-0">
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
                        <span class="text-white">${item.userVerified ? `<i class="fa fa-check-circle"></i>` : ""}</span> 
                        ${item.userHandle} · ${item.date}
                    </div>
                    <div class="flex-shrink-0 text-end">
                        <i class="fa-solid fa-ellipsis fa-lg"></i>
                    </div>
                </div>
                
                <div class="text-white">${item.mainContent}</div>
				
				<div class="card"">
                    <img class="card-img-top" height="350" src=${item.linkedContentImage} alt="Card image cap">
                    <div class="card-body">
                        <div class="text-white">${item.linkedContentHeader}</div>
                        <p>${item.linkedContentBody}</p>
                        <a href="#" class="text-decoration-none text-dark">
                            ${item.linkedContentLink}
                        </a>
                    </div>
                </div>
                
                <div class="d-flex gap-5 wd-post-links">
                    <!-- Comment Link -->
                    <div class="me-5">
                        <a class="text-dark" href="#">
                            <i class="fa-solid fa-comment"></i>
                            <span class="ms-3">${item.comments}</span>
                        </a>
                    </div>

                    <!-- Retuit Link -->
                    <div class="me-5">
                        <a class="text-dark" href="#">
                            <i class="fa-solid fa-retweet"></i>
                            <span class="ms-3">${item.retuits}</span>
                        </a>		
                    </div>
                    <!-- Like Link -->
                    <div class="me-5">
                        <a class="text-dark" href="#">
                            <i class="fa-solid fa-heart"></i>
                            <span class="ms-3">${item.likes}</span>
                        </a>
                    </div>
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