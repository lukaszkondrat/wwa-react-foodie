import { useContext } from "react";
import Card from "../UI/Card";
import FavContext from "../../store/favourites-context";
import classes from "./RestaurantItem.module.css";

const RestaurantItem = (props) => {
  const favCtx = useContext(FavContext);
  const itemIsFavourite = favCtx.itemIsFavourite(props.id);

  const toggleFavouriteHandler = () => {
    if (itemIsFavourite) {
      favCtx.removeFavourite(props.id);
    } else {
      favCtx.addFavourite({
        id: props.id,
        image: props.image,
        title: props.title,
        address: props.address,
        description: props.description,
      });
    }
  };
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouriteHandler}>
            {itemIsFavourite ? "Remove from Favourites" : "To Favourites"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default RestaurantItem;
