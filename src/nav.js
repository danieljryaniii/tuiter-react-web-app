import {Link} from "react-router-dom";

function Nav({active='lab'}) {
    return (
        <div className={"nav nav-tabs mt-2 mb-3 bg-light fw-bolder rounded-3 border-secondary"}>
            <Link className={`nav-item nav-link ${active === '/' ? 'active' : ''}`} to={"/"}>Labs</Link>
            <Link className={`nav-item nav-link ${active === '/a6' ? 'active' : ''}`} to={"/"}>Assignment 6</Link>
            <Link className={`nav-item nav-link ${active === '/a7' ? 'active' : ''}`} to={"/a7"}>Assignment 7</Link>
            <Link className={`nav-item nav-link ${active === 'tuiter' ? 'active' : ''}`} to={"/tuiter/home"}>Tuiter</Link>
        </div>
    );
}
export default Nav;