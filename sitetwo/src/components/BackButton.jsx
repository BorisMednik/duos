import { Link } from "react-router-dom";
import BackButton_style from "./BackButton_style.css";
const BButton = () => {
  return (
    <div className="BackButton">
      <Link to="/">
        <div className="bb">
          <div>
            <span>&larr;</span>
          </div>
          <div>
            <span>назад</span>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default BButton;
