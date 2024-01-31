import card_style from "./card_style.css";
import { Link } from "react-router-dom";

const Card = ({ profile }) => {
  const style = {
    bacground: profile.image,
  };
  return (
    <>
      <Link to={profile.link}>
        <div className="card">
          <div className="img" style={style}>
            <img src={profile.image} alt={profile.name} />
          </div>
          <div className="text_box">
            <span>{profile.name}</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
