import React, { useState } from "react";
import getUserId from "../../../requests/getUserId";
import sendMoney from "../../../requests/sendMoney";
import { send } from "../Home.module.scss";

export default function Send({ data, userName }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  function handleSend(ev) {
    ev.preventDefault();
    const intAmount = +amount;
    if (intAmount > 0 && intAmount <= data.money) {
      sendMoney(userName, name, intAmount).catch((er) => {
        alert(er.message);
      });
    } else {
      alert("amount must be positive and you have more than it");
    }
  }

  return (
    <form className={send}>
      <h3>send money</h3>
      <label htmlFor="user-name">user name</label>
      <input
        type="text"
        name="user-name"
        value={name}
        onChange={(ev) => setName(ev.target.value)}
      />
      <label htmlFor="amount">amount</label>
      <input
        type="number"
        name="amount"
        value={amount}
        onChange={(ev) => setAmount(ev.target.value)}
      />
      <button onClick={handleSend}>send</button>
    </form>
  );
}
