

import { useState } from "react";

// components
import { GoogleLoginButton } from "react-social-login-buttons";
import Header from "../global/Header";
import Create from "./components/Create";

import styles from "./Login.module.scss";
import { auth } from "../../requests/init";
import createUser from "../../requests/createUser";
import login from "../../requests/Login";

function Login({ onLogIn }) {
  const [isCreate, setIsCreate] = useState(false);

  const handleLogin  = () => {
    login()
    .then(([isFounded,userName])=>{
      isFounded ? onLogIn(userName) : setIsCreate(true)
    })
  }
  const handleCreate = (userName) => createUser(userName, auth.currentUser.uid).then(onLogIn)

  return (
    <div className={styles.login}>
      <Header />
      <GoogleLoginButton onClick={handleLogin} />
      {isCreate && <Create onCreate={handleCreate}/> }
    </div>
  );
}

export default Login;
