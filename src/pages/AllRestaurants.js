import { useState, useEffect } from "react";
import RestaurantList from "../components/restaurants/RestaurantList";

const AllRestaurants = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedRestaurants, setLoadedRestaurants] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://warsaw-foodie-default-rtdb.firebaseio.com/restaurants.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const restaurants = [];
        for (const key in data) {
          const restaurant = {
            id: key,
            ...data[key],
          };
          restaurants.push(restaurant);
        }
        setIsLoading(false);
        setLoadedRestaurants(restaurants);
      });
  }, []);

  if (isLoading) {
    return <section>Loading...</section>;
  }

  return (
    <section>
      <h1>All restaurants</h1>
      <RestaurantList restaurants={loadedRestaurants} />
    </section>
  );
};

export default AllRestaurants;
