import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import RestCard from "./rest_card";

const SearchLine = ({ Profiles }) => {
  const [filteredRestaurants, setFilteredRestaurants] = useState(Profiles);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchChange = (event) => {
    const newSearchText = event.target.value;
    searchParams.set("search", newSearchText);
    setSearchParams(searchParams);

    const filter = newSearchText.toLowerCase();
    setFilteredRestaurants(
      Profiles.filter(
        (profile) =>
          profile.name.toLowerCase().includes(filter) ||
          profile.description.toLowerCase().includes(filter)
      )
    );
  };
  return (
    <div>
      <input
        value={searchParams.get("search")}
        placeholder="Найти..."
        onChange={searchChange}
        className="text-stone-900 placeholder-stone-400 text-2xl font-light outline-none"
      />
      {filteredRestaurants.map((profile) => (
        <RestCard
          key={profile.id}
          /*  name={Profiles.name}
          description={Profiles.description} */
          /*    onClick={() => navigate(`/${restaurant.id}`)} */
          profile={profile}
        />
      ))}
    </div>
  );
};
export default SearchLine;
