import React from "react";
import NavItem from "./nav-item";
import navTabs from './nav-tabs.json';
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const active = paths[2];

    return (
        <div className={"list-group"}>
            <a className={"list-group-item"}>
                <i className="fa-brands fa-twitter"></i>
            </a>
            {
                navTabs.map((tab, i) => {
                    return (<NavItem active={active} tab={tab} key={i}/>);
                })
            }

        </div>
    );
};
export default NavigationSidebar;