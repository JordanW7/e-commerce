import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const HomePage = lazy(() =>
  import(/* webpackChunkName: "HomePage" */ "./pages/HomePage/HomePage")
);

const App = () => {
  return (
    <Suspense fallback={<div />}>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </Suspense>
  );
};

export default App;
