import homepage_style from "../pages/homepage_style.css";
import Card from "../components/card";

/* import {Link} from "react-router-dom" */

/*  */

const Homepage = ({ data }) => {
  console.log("Homepage");
  return (
    <div className="card_box">
      {data.map((profile, ID) => (
        <div key={ID}>
          <Card profile={profile} />
        </div>
      ))}
    </div>
  );
};

export default Homepage;
