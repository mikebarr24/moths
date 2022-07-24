import "./Home.scss";
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <div className="home container">
      <h1 className="home-title">Moths &amp; Butterflies UK</h1>
      <Link to="/today">
        <button className="home-today-button">Last 24 Hours</button>
      </Link>
    </div>
  );
}
