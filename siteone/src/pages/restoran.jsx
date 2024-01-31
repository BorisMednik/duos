import { useParams } from "react-router-dom";
import BButton from "../components/BackButton";

import restoran_style from "./restoran_style.css";

const Restoran = ({ data }) => {
  const { ID } = useParams();

  return (
    <>
      {data
        .filter((profile) => profile.id == ID)
        .map((profile) => (
          <div key={profile.id} className="restik">
            <BButton></BButton>
            <div className="adress"></div>
            <div className="name">
              <h1>{profile.name}</h1>
            </div>
            <div className="rating"></div>
            <div className="photo">
              <img src={profile.image} alt={profile.id} />
            </div>
            <div className="disc">
              <p>{profile.description}</p>
            </div>
            <div className="info">
              <div className="tel">
                <h4>телефон</h4>
                <span>{profile.phone}</span>
              </div>
              <div className="check">
                <h4>средний чек</h4>
                <span>{profile.price}</span>
              </div>
              <div className="worktime">
                <h4>время работы</h4>
                <span>{profile.worktime}</span>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Restoran;
/* https://codesandbox.io/p/sandbox/shy-cdn-3n0ke9?file=%2Fsrc%2Fcomponents%2FCardComponent.jsx%3A18%2C5 */
