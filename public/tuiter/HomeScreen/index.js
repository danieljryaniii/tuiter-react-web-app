import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import HomeComponent from "../HomeComponent/index.js";

const homeComponent = () => {
    const $homeDiv = $("#wd-home");
    return $homeDiv.append(`
        <div class="row mx-0 mt-2">
            <div class="col-2 col-lg-1 col-xl-2 text-center text-xl-start">
                ${NavigationSidebar('home')}
            </div>
            <div class="col-10 col-lg-7 col-xl-6">
                ${HomeComponent()}        
            </div>
            <div class="d-none d-lg-block col-lg-4">
                ${PostSummaryList()}   
            </div>
        </div>
    `);
}
$(homeComponent());