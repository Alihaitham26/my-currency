import { doc, getDoc } from "firebase/firestore";
import { db } from "./init";

async function getUserId(userName) {
  return getDoc(doc(db, "names", userName)).then((doc) => {
    return doc.exists() ? [true, doc.data().uid] : [false, ""];
  });
}

export default getUserId;
