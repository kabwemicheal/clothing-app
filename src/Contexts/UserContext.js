import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocFromAuth,
} from "../Firebase/FirebaseUtils";
// import { signOut } from "firebase/auth";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unsubscribeFromAuth = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      setCurrentUser(user);
    });
  }, []);
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
