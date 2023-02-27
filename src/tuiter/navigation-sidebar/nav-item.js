import React from "react";
import {Link} from "react-router-dom";

const NavItem = ({active, tab}) => {
    const isActive = tab.name === active;
    return (
        <Link to={ (tab.name === 'labs' ? '/' : '/tuiter/' + tab.name) }
              className={`list-group-item 
                       list-group-item-action 
                       ${isActive ? 'active' : ''}`}>

            <div className={"row"}>
                <div className={"col-12 col-xl-2"}>
                    {
                        tab.secondaryIcon &&
                            <span className={"fa-stack"}>
                                <i className={tab.icon}></i>
                                <i className={tab.secondaryIcon}></i>
                            </span>
                    }
                    {
                        !tab.secondaryIcon && <i className={tab.icon}></i>
                    }
                </div>
                <div className={"col-10"}>
                    <span className={"d-none d-xl-inline"}>
                        {tab.name.charAt(0).toUpperCase() + tab.name.slice(1)}
                    </span>
                </div>
            </div>
        </Link>
    );
};
export default NavItem;