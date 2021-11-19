import React, { useState } from "react";
import { UseToggle } from "../Context/toogle";
import { db, storage } from "../firebase";
import { useLoader } from "../Context/loader";
import { useAuth } from "../Context/AuthProvider";
export default function CreatePost() {
  const { toggleCreate } = UseToggle();
  const [uploadImage, setUploadImage] = useState([]);
  const [message, setMessage] = useState();
  const { currentuser } = useAuth();
  const { setLoading } = useLoader();

  const handleSetUploadImage = (e) => {
    const pickfile = e.target.files;
    setUploadImage(Array.from(pickfile));
  };

  const onPost = async () => {
    setLoading(true);
    try {
      for (let i = 0; i < uploadImage.length; i++) {
        const mainfolder = await storage.ref(`posts/${currentuser.uid}`);
        const childfolder = await mainfolder.child(`${uploadImage[i].name}`);
        await childfolder.put(uploadImage[i]);

        await childfolder.getDownloadURL((url) => {
          db.collection("posts").add({
            photo: url,
            message,
          });
        });
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  return (
    <>
      <div className={`create_post ${toggleCreate && "create_post_show"}`}>
        <div className="post">
          <div className="post_textarea">
            <textarea
              placeholder="Post your thoughts..."
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="post_btn">
            <button onClick={onPost}>Post</button>
          </div>
        </div>
        <div className="choosen_image">
          {uploadImage &&
            uploadImage.map((img, index) => {
              return (
                <div className="image" key={index}>
                  <img src={URL.createObjectURL(img)} alt="img" />
                  <i
                    className="fas fa-times"
                    onClick={() => {
                      setUploadImage(
                        uploadImage.filter((imgflt, i) => {
                          return i !== index;
                        })
                      );
                    }}
                  ></i>
                </div>
              );
            })}
        </div>

        <div className="attach_file_post" style={{ color: "white" }}>
          <div className="file_wrapper">
            {/* file start */}
            <div className="file">
              <label htmlFor="upload_file">
                <i className="fas fa-image"></i>
              </label>
              <input
                type="file"
                id="upload_file"
                hidden
                multiple
                onChange={handleSetUploadImage}
                accept="image/png, image/jpeg"
              />
            </div>
            {/* file ends */}
          </div>
        </div>
      </div>
    </>
  );
}
