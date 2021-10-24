import { useState } from "react";
import { useLoader } from "../../Context/loader";
import { useAuth } from "../../Context/AuthProvider";
import { useHistory } from "react-router-dom";
import { auth } from "../../firebase";
export default function Formactions() {
  const history = useHistory();
  const { setLoading } = useLoader();
  const { signup, signin, google, facebook } = useAuth();
  const [error, setError] = useState();
  // signup
  const onSignUp = async ({ email, password, username }) => {
    try {
      setLoading(true);
      await signup(email, password);
      await auth.currentUser.updateProfile({
        displayName: username,
      });
      setTimeout(() => {
        history.push("/");
        setLoading(false);
      }, 5000);
    } catch (e) {
      const errorMessage = e.message;
      setError(errorMessage);
      setLoading(false);
    }
  };

  // sign in
  const onSignIn = async ({ email, password }) => {
    setLoading(true);
    try {
      await signin(email, password);

      setTimeout(() => {
        history.push("/");
        setLoading(false);
      }, 5000);
    } catch (e) {
      const errorMessage = e.message;
      setError(errorMessage);
      setLoading(false);
    }
  };

  // google auth

  const onGoogle = async () => {
    try {
      await google();
      history.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  // Facebook auth
  const onFacebook = async () => {
    try {
      await facebook();
      history.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  return { onSignUp, onSignIn, onGoogle, onFacebook, error };
}
