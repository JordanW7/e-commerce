import React, { Fragment, lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import { setCurrentUser } from "./redux/user.actions";
import Header from "./components/Header";

const HomePage = lazy(() =>
  import(/* webpackChunkName: "HomePage" */ "./pages/HomePage/HomePage")
);

const ShopPage = lazy(() =>
  import(/* webpackChunkName: "ShopPage" */ "./pages/ShopPage/ShopPage")
);

const SignInPage = lazy(() =>
  import(/* webpackChunkName: "SignInPage" */ "./pages/SignInPage/SignInPage")
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (!userAuth) {
        dispatch(setCurrentUser(null));
        return;
      }
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapshot => {
        dispatch(
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        );
      });
    });
    return () => unsubscribeFromAuth();
  }, [dispatch]);

  return (
    <Fragment>
      <Header />
      <Suspense fallback={<div />}>
        <Switch>
          <Route path="/signin" component={SignInPage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Suspense>
    </Fragment>
  );
};

export default App;
