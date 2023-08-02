import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import DashBoard from "./components/DashBoard/DashBoard";
import Transactions from "./components/Transactions/Transactions";
import Profile from "./components/Profile/Profile";
import ProtectRoute from "./components/ProtectRoute/ProtectRoute";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectRoute exact path="/" component={DashBoard} />
        <ProtectRoute exact path="/transaction" component={Transactions} />
        <ProtectRoute exact path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
