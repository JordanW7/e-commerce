import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth, createUserProfileDocument } from "./libs/firebase";
import { setCurrentUser } from "./redux/user.actions";
import Header from "./components/Header";
import Routing from "./Routing";

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
      <Routing />
    </Fragment>
  );
};

export default App;
