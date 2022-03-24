import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import { AboutUs } from "./pages/AboutUs";
import { Home } from "./pages/Home";
import { Market} from "./pages/Market";
import { UserData } from "./pages/UserData/UserData";
// import { OutOfLine } from './pages/OutOfLine';
import { aboutUs, home, market, user } from "./Utils/Pathnames";

function App() {
 
  return (
    <Router>
      <Routes>
        <Route exact path={home} element={<Home />} />
        <Route exact path={market} element={<Market />} />
        <Route exact path={aboutUs} element={<AboutUs />} />
        <Route exact path={user} element={<UserData />} />
      </Routes>
    </Router> 
  );
}

export default App;
