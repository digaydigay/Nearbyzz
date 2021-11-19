import React, { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthProvider";
import { auth, db, storage } from "../firebase";
import { useParams } from "react-router-dom";
import { useLoader } from "../Context/loader";
export default function Profile() {
  const { currentuser } = useAuth();
  const { setLoading } = useLoader();
  const [user, setUser] = useState();
  const [editName, setEditName] = useState(false);
  const [editBio, setEditBio] = useState(false);
  const [isdisplayName, setIsdisplayName] = useState("");
  const [isBio, setIsBio] = useState("");
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const user = async () => {
      await db.collection("users").onSnapshot((snap) => {
        snap.docs.map((doc) => {
          if (doc.data().uid !== id) return null;
          return setUser(doc.data());
        });
      });
      setLoading(false);
    };

    user();
  }, [id, setLoading]);

  const handleOnChangeDP = async (e) => {
    setLoading(true);
    try {
      const file = e.target.files[0];

      const ref = await storage.ref("profile");
      const child = await ref.child(`${id}`);
      await child.put(file);

      const downloadimage = await child.getDownloadURL((url) => {
        return url;
      });

      await auth.currentUser.updateProfile({
        photoURL: downloadimage,
      });
      await db.collection("users").doc(`${currentuser.uid}`).update({
        photoURL: downloadimage,
      });

      window.location.reload();
    } catch (e) {
      return null;
    }
    setLoading(true);
  };

  const handleOnChangeCover = async (e) => {
    setLoading(true);
    try {
      const file = e.target.files[0];

      const ref = await storage.ref("cover");
      const child = await ref.child(`${id}`);
      await child.put(file);

      const downloadimage = await child.getDownloadURL((url) => {
        return url;
      });

      await db.collection("users").doc(`${currentuser.uid}`).update({
        coverURL: downloadimage,
      });

      window.location.reload();
    } catch {
      return null;
    }
    setLoading(false);
  };

  const oneditname = async () => {
    setEditName(!editName);
  };
  const oneditbio = async () => {
    setEditBio(!editBio);
  };

  const onUpdateName = async () => {
    setLoading(true);
    if (isdisplayName.length < 3) return false;
    try {
      await db.collection("users").doc(currentuser.uid).update({
        displayName: isdisplayName,
      });
      window.location.reload();
    } catch {
      return false;
    }
    setLoading(false);
  };

  const onUpdateBio = async () => {
    setLoading(true);
    if (isBio.length < 3) return false;
    try {
      await db.collection("users").doc(currentuser.uid).update({
        bio: isBio,
      });
      window.location.reload();
    } catch {
      return false;
    }
    setLoading(false);
  };

  return (
    <div className="profile_section">
      <div className="cover_section">
        <div className="cover_wrapper">
          <img src={user && user.coverURL} alt="cover" />

          {id === currentuser.uid && (
            <>
              <label htmlFor="cover">
                <i className="fas fa-camera"></i>
              </label>
              <input
                type="file"
                id="cover"
                hidden
                onChange={handleOnChangeCover}
              />
            </>
          )}
        </div>
      </div>
      <div className="profile_picture_section">
        <div className="image">
          <img src={user && user.photoURL} alt="dp" />
          {id === currentuser.uid && (
            <>
              <label htmlFor="dp">
                <i className="fas fa-camera"></i>
              </label>
              <input type="file" id="dp" hidden onChange={handleOnChangeDP} />
            </>
          )}
        </div>
      </div>
      <div className="profile_name_section">
        <div className="update_name">
          {editName && (
            <>
              <input
                type="text"
                defaultValue={user && user.displayName}
                onChange={(e) => {
                  setIsdisplayName(e.target.value);
                }}
                maxLength="30"
              />
              <button onClick={onUpdateName}>
                <i className="fas fa-check"></i>
              </button>
              <button onClick={oneditname}>
                <i className="fas fa-times"></i>
              </button>
            </>
          )}
        </div>
        {id === currentuser.uid && !editName && (
          <>
            <i className="fas fa-edit" onClick={oneditname}></i>
          </>
        )}

        <h2>{user && user.displayName}</h2>
      </div>
      <div className="bio_section">
        <div className="bio_wrapper">
          <div className="update_bio">
            {editBio && (
              <>
                <textarea
                  type="text"
                  defaultValue={user && user.bio}
                  onChange={(e) => {
                    setIsBio(e.target.value);
                  }}
                  maxLength="100"
                />
                <button onClick={onUpdateBio}>
                  <i className="fas fa-check"></i>
                </button>
                <button onClick={oneditbio}>
                  <i className="fas fa-times"></i>
                </button>
              </>
            )}
          </div>
          {id === currentuser.uid && !editBio && (
            <>
              <i className="fas fa-edit" onClick={oneditbio}></i>
            </>
          )}
          <p>{user && user.bio} </p>
        </div>
      </div>
      <div className="profile_nav">
        <ul>
          <li>Post</li>
          <li>About</li>
        </ul>
      </div>
      <div className="posts_section ">
        <h3>There have no Posts</h3>
      </div>
    </div>
  );
}
