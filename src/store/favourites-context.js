import React, { useState } from "react";

const FavContext = React.createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (favouriteRestaurant) => {},
  removeFavourite: (restaurantId) => {},
  itemIsFavourite: (restaurantId) => {},
});

export const FavContextProvider = (props) => {
  const [userFavs, setUserFavs] = useState([]);

  const addFavouriteHandler = (favouriteRestaurant) => {
    setUserFavs((prevFavourites) => {
      return [...prevFavourites, favouriteRestaurant];
    });
  };

  const removeFavouriteHandler = (restaurantId) => {
    setUserFavs((prevFavourites) => {
      return prevFavourites.filter(
        (restaurant) => restaurant.id !== restaurantId
      );
    });
  };

  const itemIsFavouriteHandler = (restaurantId) => {
    return userFavs.some((restaurant) => restaurant.id === restaurantId);
  };

  const context = {
    favourites: userFavs,
    totalFavourites: userFavs.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    itemIsFavourite: itemIsFavouriteHandler,
  };

  return (
    <FavContext.Provider value={context}>{props.children}</FavContext.Provider>
  );
};

export default FavContext;
