import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <div className={"container-fluid mt-2 mb-4"}>
              <Routes>
                <Route index element={<Labs/>}/>
                <Route path={"/hello"} element={<HelloWorld/>}/>
                <Route path={"/tuiter/*"} element={<Tuiter/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
