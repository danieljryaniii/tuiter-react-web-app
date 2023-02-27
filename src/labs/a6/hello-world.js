import Nav from "../../nav";
import {Link} from "react-router-dom";
function HelloWorld() {
    return (
        <div>
            <Nav active={'hello'}/>
            <h1>Hello World!</h1>
        </div>
    );
}
export default HelloWorld;