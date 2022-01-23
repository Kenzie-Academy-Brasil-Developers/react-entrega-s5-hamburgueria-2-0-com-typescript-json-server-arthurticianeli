import { Switch } from "react-router-dom";
import { Login } from "../Pages/Login";
import { Main } from "../Pages/Main";
import { Signup } from "../Pages/Signin";

import { Route } from "./Route";

export const RoutesPaths = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/main" component={Main} isPrivate />
    </Switch>
  );
};
