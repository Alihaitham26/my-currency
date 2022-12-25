import { doc, setDoc } from "firebase/firestore";
import { db } from "./init";

function createUser(userName, uid) {
  return setDoc(doc(db, "names", userName), { uid: uid }).then(()=>userName);
}

export default createUser;
