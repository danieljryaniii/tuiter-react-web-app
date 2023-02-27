import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import PostSummaryList from "./post-summary-list";
import {Routes, Route} from "react-router-dom";
import HomeComponent from "./home";

function Tuiter() {
    return (
        <div>
            <Nav active={'tuiter'}/>

            <div className="row mx-0 mt-2">
                <div className="col-2 col-lg-1 col-xl-2 text-center text-xl-start">
                     <NavigationSidebar />
                </div>
                <div className="col-10 col-lg-7 col-xl-6">
                    <Routes>
                        <Route path={"home"} element={<HomeComponent />}/>
                        <Route path={"explore"} element={<ExploreComponent />}/>
                    </Routes>
                </div>
                <div className="d-none d-lg-block col-lg-4">
                    <Routes>
                        <Route path={"home"} element={<PostSummaryList />}/>
                        <Route path={"explore"} element={<WhoToFollowList />}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}
export default Tuiter;