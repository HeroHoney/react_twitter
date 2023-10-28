import React from "react";
import { Route } from 'react-router-dom';
import PostIdPage from "../pages/PostIdPage";
import Posts from '../pages/Posts';
import Home from '/Users/batyrbekasel/Desktop/react/prj/src/pages/Home.jsx';
import Profile from "../pages/Profile";

const AppRouting = () => {
  return (
    <React.Fragment>
      <Route path="/home" component={Home}/>
      <Route path="/profile" component={Profile} />
      <Route exact path="/posts" component={Posts} />
      <Route exact path="/posts/:id" component={PostIdPage} />
    </React.Fragment>
  );
}

export default AppRouting;
