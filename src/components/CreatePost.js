import React from "react";
import nextmedia from "../assets/nextmedia.png";
import { UseToggle } from "../Context/toogle";
export default function CreatePost() {
  const { toggleCreate } = UseToggle();

  return (
    <>
      <div className={`create_post ${toggleCreate && "create_post_show"}`}>
        <div className="post">
          <div className="post_textarea">
            <textarea placeholder="Post your thoughts..."></textarea>
          </div>
          <div className="post_btn">
            <button>Post</button>
          </div>
        </div>

        <div className="files">
          <div className="file">
            <img src={nextmedia} alt="" />
          </div>
        </div>

        <div className="attach_file_post" style={{ color: "white" }}>
          <div className="file_wrapper">
            {/* file start */}
            <div className="file">
              <label htmlFor="upload_file">
                <i className="fas fa-image"></i>
              </label>
              <input type="file" id="upload_file" hidden />
            </div>
            {/* file ends */}
            {/* file start */}
            <div className="file">
              <label htmlFor="upload_file">
                <i className="fas fa-video"></i>
              </label>
              <input type="file" id="upload_file" hidden />
            </div>
            {/* file ends */}
            {/* file start */}
            <div className="file">
              <label htmlFor="upload_file">
                <i className="fas fa-folder"></i>
              </label>
              <input type="file" id="upload_file" hidden />
            </div>
            {/* file ends */}
          </div>
        </div>
      </div>
    </>
  );
}
