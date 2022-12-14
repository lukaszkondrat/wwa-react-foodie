import { useContext } from "react";
import FavContext from "../store/favourites-context";
import RestaurantList from "../components/restaurants/RestaurantList";

const Favourites = () => {
  const favCtx = useContext(FavContext);
  let content;
  if (favCtx.totalFavourites === 0) {
    content = <p>You have no favourites yet. Start adding some!</p>;
  } else {
    content = <RestaurantList restaurants={favCtx.favourites} />;
  }
  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
};

export default Favourites;
