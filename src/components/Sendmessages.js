import React from "react";
import { useState } from "react";
import { db } from "../firebase";
import firebase from "firebase";
import { useAuth } from "../Context/AuthProvider";

export default function Sendmessages() {
  const { currentuser } = useAuth();
  const [text, setText] = useState("");

  async function sendMessage(e) {
    e.preventDefault();
    if (!text.trim()) return;
    setText("");
    try {
      currentuser &&
        (await db.collection("messages").add({
          displayName: currentuser.displayName,
          text,
          photoURL: currentuser.photoURL,
          uid: currentuser.uid,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        }));
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="form_chat">
      <label htmlFor="send_image" className="send_image">
        <i className="fas fa-image"></i>
      </label>
      <div className="files">
        <input type="file" id="send_image" hidden />
      </div>
      <form className="chat_input">
        <input
          type="text"
          placeholder="Type your message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="send" onClick={sendMessage}>
          <i className="fas fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
}
