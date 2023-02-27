import React from "react";
import PostSummaryList from "../post-summary-list";

const ExploreComponent = () => {
    return (
        <>
        <div className="row align-items-center m-0">
            <div className="col-11 px-0">
                <div className="search-bar-input">
                    <div className="input-group">
                        <span className="input-group-text bg-white"
                              id="search-bar-icon">
                                <label id="search-bar-label"
                                       htmlFor={"search-bar"}>
                                    <i className="fa-solid fa-magnifying-glass text-dark"></i>
                                </label>
                        </span>
                        <input type="text"
                               id="search-bar"
                               className="form-control"
                               placeholder="Search Tuiter"
                               aria-describedby="search-bar-icon"/>
                    </div>
                </div>
            </div>
            <div className="col-1 text-end px-0">
                <i className="fa-solid fa-gear fa-xl text-primary"></i>
            </div>
        </div>

        <div className="navigation-main">
            <ul className="nav nav-tabs mt-2">
                <li className="nav-item">
                    <a className="nav-link active" href="for-you.html">For you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="trending.html">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="news.html">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="Sports.html">Sports</a>
                </li>
                <li className="d-none d-md-block nav-item">
                    <a className="nav-link" href="entertainment.html">Entertainment</a>
                </li>
            </ul>
        </div>

        <div className="feature-photo my-2">
            <div className="card text-bg-dark">
                <img className="card-img" src="../../images/starship.jpeg"/>
                <div className="card-img-overlay p-2">
                    <h1 className="card-title m-0">Space X's Starship</h1>
                </div>
            </div>
        </div>

        <PostSummaryList />
        </>
    );
};
export default ExploreComponent;