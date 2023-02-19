import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
    <!-- Search and Settings-->
        <div class="row align-items-center m-0">
            <!-- Search Bar -->
            <div class="col-11 px-0">
                <div class="search-bar-input">
                    <div class="input-group">
                        <span class="input-group-text bg-white"
                              id="search-bar-icon">
                                <label id="search-bar-label"
                                       for="search-bar">
                                    <i class="fa-solid fa-magnifying-glass text-dark"></i>
                                </label>
                        </span>
                        <input type="text"
                               id="search-bar"
                               class="form-control"
                               placeholder="Search Tuiter"
                               aria-describedby="search-bar-icon"/>
                    </div>
                </div>
            </div>

            <div class="col-1 text-end px-0">
                <i class="fa-solid fa-gear fa-xl text-primary"></i>
            </div>
        </div>

        <!-- Nav Bar -->
        <div class="navigation-main">
            <ul class="nav nav-tabs mt-2">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="Sports.html">Sports</a>
                </li>
                <li class="d-none d-md-block nav-item">
                    <a class="nav-link" href="entertainment.html">Entertainment</a>
                </li>
            </ul>
        </div>

        <div class="feature-photo mt-2">
            <div class="card text-bg-dark">
                <img class="card-img" src="../images/starship.jpeg"/>
                <div class="card-img-overlay p-2">
                    <h1 class="card-title m-0 h3">Space X's Starship</h1>
                </div>
            </div>
        </div>
        ${PostSummaryList()}
    `);
}

export default ExploreComponent;