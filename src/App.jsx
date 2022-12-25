import { useState } from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  return isLoggedIn ? (
    <Home userName={userName} />
  ) : (
    <Login
      onLogIn={(uName) => {
        setIsLoggedIn(true);
        setUserName(uName);
      }}
    />
  );
}

export default App;
