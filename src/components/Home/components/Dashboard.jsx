import { dashboard } from "../Home.module.scss";

function Dashboard({ data }) {
  return (
    <div className={dashboard}>
      <div>
        you received<h2>{data.received || "0"}</h2>
      </div>
      <div>
        you spent<h2>{data.spent || "0"}</h2>
      </div>
      <div>
        you have<h2>{data.money || "0"}</h2>
      </div>
    </div>
  );
}

export default Dashboard;
