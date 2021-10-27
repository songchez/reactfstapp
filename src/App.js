import { HashRouter,  NavLink,  Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";

function App() {
  return <HashRouter>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/">Home</NavLink>

    <Route path="/" exact ={true} component = {Home} />
    <Route path="/about" component = {About} />
  </HashRouter>
}

export default App;