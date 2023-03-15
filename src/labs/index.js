import Assignment6 from "./a6";
import Nav from "../nav";
import {Routes, Route} from "react-router-dom";
import Assignment7 from "./a7";
import {useLocation} from "react-router";
function Labs() {
    const {pathname} = useLocation();
    return (
      <div>
          <Nav active={pathname}/>
          <Routes>
              <Route index element={<Assignment6 />} />
              <Route path={"a7"} element={<Assignment7 />} />
          </Routes>
      </div>
    );
}
export default Labs;