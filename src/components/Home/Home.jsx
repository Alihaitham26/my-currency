import { useState, useEffect, useRef } from "react";

import Dashboard from "./components/Dashboard";
import Header from "../global/Header";
import Send from "./components/Send";
import styles from "./Home.module.scss";
import useDataGetter from "../../hooks/useDataGetter";

export default function Home({ userName }) {
  const [isSending, setIsSending] = useState(false);
  const data = useDataGetter(userName);

  return (
    <div className={styles.home}>
      <Header />
      <p className={styles.id}>user name: {userName}</p>
      <Dashboard data={data} />
      <button
        className={styles.btn}
        onClick={(_) => {
          setIsSending(true);
        }}
      >
        send money
      </button>
      {isSending ? <Send data={data} userName={userName} /> : null}
    </div>
  );
}
