import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Detail from "./components/Detail.jsx";
import Form from "./components/Form.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route path="/home/:idCountry" component={Detail} />
        <Route exact path="/createActivity" component={Form} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
