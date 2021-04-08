import "./user-auth.css";
import React, { useState, useEffect, useContext, createContext } from "react";

// useAuth hook: https://usehooks.com/useAuth/

const authContext = createContext(null);
// Provider component that wraps your app and makes auth object
// available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
// Hook for child components to get the auth object
// and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};
// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);

  // Get a simple user object only with useful data
  const appUser = (authUser) => ({
    uid: authUser.uid,
    email: authUser.email,
    displayName: authUser.displayName,
  });

  // Wrap any Firebase methods we want to use making sure
  // to save the user to state.
  const signIn = (email, password) =>
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        setUser(appUser(userCredential.user));
        return true;
      })
      .catch((error) => {
        // TODO: Notify error
        console.log(`${error.code}: ${error.message}`);
        return false;
      });

  const signOut = () => {
    firebase.auth().signOut();
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any
  // component that utilizes this hook to re-render with the
  // latest auth object.
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(appUser(authUser));
      } else {
        setUser(false);
      }
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  // Return the user object and auth methods
  return {
    user,
    signIn,
    signOut,
  };
}
