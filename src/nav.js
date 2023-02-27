import {Link} from "react-router-dom";

function Nav({active='lab'}) {
    return (
        <div className={"nav nav-tabs mt-2 mb-3 bg-light fw-bolder rounded-3 border-secondary"}>
            <Link className={`nav-item nav-link ${active === 'lab' ? 'active' : ''}`} to={"/"}>Lab</Link>
            <Link className={`nav-item nav-link ${active === 'hello' ? 'active' : ''}`} to={"/hello"}>Hello</Link>
            <Link className={`nav-item nav-link ${active === 'tuiter' ? 'active' : ''}`} to={"/tuiter/home"}>Tuiter</Link>
        </div>
    );
}
export default Nav;