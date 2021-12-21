import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;