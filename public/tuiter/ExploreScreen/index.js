import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "../ExploreComponent/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

const exploreComponent = () => {
    const $exploreDiv = $("#wd-explore");
    return $exploreDiv.append(`
        <div class="row mx-0 mt-2">
            <div class="col-2 col-lg-1 col-xl-2 text-center text-xl-start">
                ${NavigationSidebar('explore')}
            </div>
            <div class="col-10 col-lg-7 col-xl-6">
                ${ExploreComponent()}        
            </div>
            <div class="d-none d-lg-block col-lg-4">
                ${WhoToFollowList()}   
            </div>
        </div>
    `);
}
$(exploreComponent());

