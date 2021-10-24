import React from "react";
import { useState } from "react";
import { db } from "../firebase";
import firebase from "firebase";
import { useAuth } from "../Context/AuthProvider";

export default function Sendmessages({ scroll }) {
  const { currentuser } = useAuth();
  const [text, setText] = useState("");

  async function sendMessage(e) {
    e.preventDefault();
    try {
      currentuser &&
        (await db.collection("messages").add({
          text,
          photoURL: currentuser.photoURL,
          uid: currentuser.uid,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        }));
    } catch (e) {
      console.log(e);
    }
    scroll.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <form className="chat_input" onSubmit={sendMessage}>
      <input
        type="text"
        placeholder="Type your message..."
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">
        <i className="fas fa-paper-plane"></i>
      </button>
    </form>
  );
}
