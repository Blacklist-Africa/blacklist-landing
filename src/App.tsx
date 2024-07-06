import "./styles/index.css";
import Wrapper from "./components/Wrapper";
import { routes } from "./constants/routes";
import { Challenges, Contact, Home, Single } from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route path={routes.home} Component={Home} />
          <Route path={routes.contact} Component={Contact} />
          <Route path={routes.challenges} Component={Challenges} />
          <Route path={routes.singleChallenge} Component={Single} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
