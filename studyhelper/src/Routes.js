import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Registeration from "./Pages/Registeration/Registeration";
import Homepage from "./Pages/Homepage/Homepage.jsx";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Login from "./Pages/Login/Login"

export default function Routes(props) {
  const routes = [
    {
      path: "/",
      component: Homepage,
    },
    {
      path: "/Register",
      component: Registeration,
    },
    {
      path: "/ContactUs",
      component: ContactUs,
    },
    {
      path: "/Login",
      component: Login
    }
  ];

  return (
    <Router>
      <Switch>
        {routes.map((route, index) => {
          return (
            <Route
              exact
              key={index}
              path={route.path}
              component={route.component}
            />
          );
        })}
      </Switch>
    </Router>
  );
}
