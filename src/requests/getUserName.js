import { db } from "./init";
import { query, where, getDocs, collection } from "firebase/firestore";
async function getUserName(uid) {
  const userNameRef = query(collection(db, "names"), where("uid", "==", uid));
  return getDocs(userNameRef).then((snapshot) => {
    let userName = "";
    let isFounded = false;
    snapshot.forEach((doc) => {
      if (isFounded) return;
      isFounded = true;
      userName = doc.id;
    });
    return [isFounded, userName];
  });
}

export default getUserName;
