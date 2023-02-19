const PostSummaryItem = (post) => {
    return (`
        <!-- List Item -->
        <li class="list-group-item p-0">
            <div class="d-flex mx-3 my-2 align-items-start">
                <div class="flex-grow-1 me-3">
                    <div class="text-secondary">
                        ${post.topic}
                    </div>
                    <div class="fw-bold">
                        ${post.userName}
                        ${post.userVerified ? `<i class="fa fa-check-circle"></i>` : ""}
                        <span class="fw-normal text-secondary">
                        - ${post.time}
                        </span>
                    </div>
                    <div class="fw-bold">
                        ${post.title}
                    </div>
                </div>
                <div class="flex-shrink-0">
                    <img class="wd-content-image" src=${post.image}/>
                </div>
            </div>
        </li> 
    `);
}

export default PostSummaryItem;