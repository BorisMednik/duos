import { Link } from "react-router-dom";

import rest_card_style from "./rest_card_style.css";

const RestCard = ({ profile }) => {
  const style = {
    bacground: profile.image,
  };
  const link = `/restoran/${profile.id}/`;
  return (
    <Link to={link}>
      <div className="Card">
        <div className="photo" style={style}>
          <img src={profile.image} alt={profile.id} />
        </div>
        <div className="profile">
          <div className="name">
            <h1>{profile.name}</h1>
          </div>
          <div className="desc">
            <p>{profile.description}</p>
          </div>
          <div className="info">
            <div className="tel info-block">
              <h4>телефон</h4>
              <span>{profile.phone}</span>
            </div>
            <div className="check info-block">
              <h4>средний чек</h4>
              <span>{profile.price}</span>
            </div>
            <div className="worktime info-block">
              <h4>время работы</h4>
              <span>{profile.worktime}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default RestCard;
