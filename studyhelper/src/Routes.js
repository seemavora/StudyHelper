import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Registeration from "./Pages/Registeration/Registeration";
import Homepage from "./Pages/Homepage/Homepage";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Login from "./Pages/Login/Login"
import Portal from './Pages/Portal/Portal'
import Collection from './Pages/Collection/Collection';
import NoteCard from './Pages/NoteCard/NoteCard';
import Questions from './Pages/Questions/Questions';

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
    },
    {
      path: '/Portal',
      component: Portal
    },
    {
      path: '/Collection',
      component: Collection
    },
    {
      path: '/NoteCard',
      component: NoteCard
    },
    {
      path: '/Questions',
      component: Questions
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
