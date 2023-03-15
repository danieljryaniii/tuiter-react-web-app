import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import {Routes, Route} from "react-router-dom";
import HomeComponent from "./home";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import who from "./reducers/who-reducer";
import tuit from "./reducers/tuits-reducer";
import tuit_feed from "./reducers/tuit-feed-reducer";

const store = configureStore({
    reducer: {who, tuit, tuit_feed}
})

function Tuiter() {
    return (
        <Provider store={store}>
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
                        <WhoToFollowList />
                    </div>
                </div>
            </div>
        </Provider>
    );
}
export default Tuiter;