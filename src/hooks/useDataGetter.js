import { useState, useEffect, useRef } from "react";
import { doc, getDoc, setDoc, onSnapshot } from "firebase/firestore";
import { db } from "../requests/init";

function useDataGetter(userName) {
  const initData = { money: 0, spent: 0, received: 0 };
  const [data, setData] = useState(initData);
  const docRef = useRef(doc(db, "users", userName));
  useEffect(() => {
    onSnapshot(docRef.current, (snap) => {
      if (snap.exists()) {
        setData(snap.data());
      } else {
        setDoc(docRef.current, initData);
      }
    });
  }, []);

  return data;
}

export default useDataGetter;
