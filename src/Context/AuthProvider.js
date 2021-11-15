import { useContext, createContext, useState, useEffect } from "react";
import { auth, Google, Facebook } from "../firebase";

const Authcontext = createContext({});
export const useAuth = () => {
  return useContext(Authcontext);
};
export const AuthProvider = ({ children }) => {
  const [currentuser, setCurrentuser] = useState({});
  const [currentUserData, setCurrentUserData] = useState([]);
  const [username, setUsername] = useState();
  const [user, setUser] = useState();
  const [dp, setdp] = useState();

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };
  const signin = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };
  const signout = () => {
    return auth.signOut();
  };
  const google = () => {
    return auth.signInWithPopup(Google);
  };
  const facebook = () => {
    return auth.signInWithPopup(Facebook);
  };

  useEffect(() => {
    const unsunscribe = auth.onAuthStateChanged((user) => {
      setCurrentuser(user);
    });
    return unsunscribe;
  }, []);

  const values = {
    currentuser,
    setCurrentuser,
    signup,
    signin,
    signout,
    google,
    facebook,
    username,
    setUsername,
    user,
    setUser,
    dp,
    setdp,
    currentUserData,
    setCurrentUserData,
  };
  return <Authcontext.Provider value={values}>{children}</Authcontext.Provider>;
};
