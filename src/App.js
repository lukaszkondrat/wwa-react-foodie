import { Route, Switch } from "react-router-dom";
import AllRestaurants from "./pages/AllRestaurants";
import NewRestaurant from "./pages/NewRestaurant";
import Favourites from "./pages/Favourites";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllRestaurants />
        </Route>
        <Route path="/new">
          <NewRestaurant />
        </Route>
        <Route path="/favourites">
          <Favourites />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
