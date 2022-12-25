import { collection, doc, getDoc, query, where } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../../requests/init";
import { create } from "../Login.module.scss";

export default function Create({ onCreate }) {
  function handleChange(ev) {
    const userNameRegex = /^\w{2,}$/;
    if (userNameRegex.test(ev.target.value)) {
      const nameQuery = query(doc(db, "names", ev.target.value));
      getDoc(nameQuery).then((snapshot) => {
        setWarning(snapshot.exists() ? "used" : "valid");
      });
    } else {
      setWarning("invalid");
    }
    setUserName(ev.target.value);
  }
  const [userName, setUserName] = useState("");
  const [warning, setWarning] = useState("invalid");
  return (
    <div className={create}>
      <h3>new user</h3>
      <label htmlFor="user-name">user name</label>
      <input
        type="text"
        name="user-name"
        value={userName}
        onChange={handleChange}
      />
      <p>{warning}</p>
      <button
        onClick={() => {
          if (warning === "valid") onCreate(userName);
        }}
      >
        create
      </button>
    </div>
  );
}
