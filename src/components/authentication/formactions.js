import { useState } from "react";
import { useLoader } from "../../Context/loader";
import { useAuth } from "../../Context/AuthProvider";
import { useHistory } from "react-router-dom";
import { auth, db, storage } from "../../firebase";

export default function Formactions() {
  const history = useHistory();
  const { setLoading } = useLoader();
  const { signup, signin, google, facebook } = useAuth();
  const [error, setError] = useState();

  // signup
  const onSignUp = async ({ email, password, username }) => {
    try {
      setLoading(true);
      let { user } = await signup(email, password);

      setTimeout(() => {
        history.push("/");
        setLoading(false);
      }, 5000);

      const dpRef = await storage.ref("profile/default.jpg");
      const dp = await dpRef.getDownloadURL((url) => {
        return url;
      });
      const coverRef = await storage.ref("cover/cover.jpg");
      const cover = await coverRef.getDownloadURL((url) => {
        return url;
      });

      let useRef = db.doc(`users/${user.uid}`);
      const snap = await useRef.get();
      if (!snap.exists) {
        useRef.set({
          displayName: username,
          email: email,
          uid: user.uid,
          bio: "Add bio Here ....",
          birthdate: null,
          study: null,
          work: null,
          sports: null,
          Hobby: null,
          photoURL: dp,
          coverURL: cover,
          createdAt: new Date(),
        });
      } else {
        return null;
      }
      await auth.currentUser.updateProfile({
        displayName: username,
        photoURL: dp,
      });
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
      const { user } = await google();
      let useRef = db.doc(`users/${user.uid}`);
      const snap = await useRef.get();
      history.push("/");

      const coverRef = await storage.ref("cover/cover.jpg");
      const cover = await coverRef.getDownloadURL((url) => {
        return url;
      });

      if (!snap.exists) {
        useRef.set({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          bio: "Add bio Here ....",
          birthdate: null,
          study: null,
          work: null,
          sports: null,
          Hobby: null,
          coverURL: cover,
          uid: user.uid,
          createdAt: new Date(),
        });
      } else {
        return null;
      }
      await auth.currentUser.updateProfile({
        displayName: user.displayName,
      });
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
