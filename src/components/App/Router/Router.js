import React from "react";
import { Route } from "react-router-dom";
import Model from "../../../containers/Model/model.container";
import routes from "./routesNames";

const Router = () => (
  <>
    <Route exact path={routes.HOME} component={Model} />
  </>
);

export default Router;
