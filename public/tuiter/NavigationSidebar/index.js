const NavigationSidebar = (active) => {
    return(`
        <div class="list-group">
            <a class="list-group-item" href="#">
                <i class="fa-brands fa-twitter"></i>
            </a>
            <!--Home Button-->
            <a class="list-group-item list-group-item-action ${active === 'home' ? 'active' : ''}" href="../HomeScreen/index.html">
                <i class="fa-solid fa-house-chimney"></i>
                <span class="d-none d-xl-inline">Home</span>
            </a>
            <!--Explore Button-->
            <a class="list-group-item list-group-item-action ${active === 'explore' ? 'active' : ''}" href="../ExploreScreen/index.html">
                <i class="fa-solid fa-hashtag"></i>
                <span class="d-none d-xl-inline">Explore</span>
            </a>
            <!--Notifications Button-->
            <a class="list-group-item list-group-item-action ${active === 'notifications' ? 'active' : ''}" href="#">
                <i class="fa-solid fa-bell"></i>
                <span class="d-none d-xl-inline">Notifications</span>
            </a>
            <!--Messages Button-->
            <a class="list-group-item list-group-item-action ${active === 'messages' ? 'active' : ''}" href="#">
                <i class="fa-solid fa-envelope"></i>
                <span class="d-none d-xl-inline">Messages</span>
            </a>
            <!--Bookmarks Button-->
            <a class="list-group-item list-group-item-action ${active === 'bookmarks' ? 'active' : ''}" href="#">
                <i class="fa-solid fa-bookmark"></i>
                <span class="d-none d-xl-inline">Bookmarks</span>
            </a>
            <!--Lists Button-->
            <a class="list-group-item list-group-item-action ${active === 'lists' ? 'active' : ''}" href="#">
                <i class="fa-solid fa-list"></i>
                <span class="d-none d-xl-inline">Lists</span>
            </a>
            <!--Profile Button-->
            <a class="list-group-item list-group-item-action ${active === 'profile' ? 'active' : ''}" href="#">
                <i class="fa-solid fa-user"></i>
                <span class="d-none d-xl-inline">Profile</span>
            </a>
            <!--More Button-->
            <a class="list-group-item list-group-item-action ${active === 'more' ? 'active' : ''}" href="#">
                <span class="fa-stack">
                    <i class="fa-solid fa-circle fa-stack-2x"></i>
                    <i class="fa-solid fa-ellipsis fa-stack-1x text-black"></i>
                </span>
                <span class="d-none d-xl-inline">More</span>
            </a>
            
            <!--Tuit Button-->
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                   Tuit
                </a>
            </div>
        </div>
    `)
}

export default NavigationSidebar;