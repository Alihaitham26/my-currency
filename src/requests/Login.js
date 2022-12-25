// firebase
import {
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
} from "firebase/auth";

import getUserName from "./getUserName";
import { auth } from "./init";

function login() {
  const googleAuth = new GoogleAuthProvider();
  return signInWithPopup(auth, googleAuth).then(() =>getUserName(auth.currentUser.uid))
}

export default login
