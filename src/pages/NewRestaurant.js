import { useHistory } from "react-router-dom";

import NewRestaurantForm from "../components/restaurants/NewRestaurantForm";

const NewRestaurant = () => {
  const history = useHistory();
  const addRestaurantHandler = async (restData) => {
    const response = await fetch(
      "https://warsaw-foodie-default-rtdb.firebaseio.com/restaurants.json",
      {
        method: "POST",
        body: JSON.stringify(restData),
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.ok) {
      history.replace("/");
    }
  };

  return (
    <section>
      <h1>Add New Restaurant</h1>
      <NewRestaurantForm onAddRestaurant={addRestaurantHandler} />
    </section>
  );
};

export default NewRestaurant;
