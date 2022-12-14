import { useContext } from "react";
import { NavLink } from "react-router-dom";
import FavContext from "../../store/favourites-context";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const favCtx = useContext(FavContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Warsaw Foodie</div>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/" exact>
              All Restaurants
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/new">
              New Restaurant
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/favourites">
              Favourites
              <span className={classes.badge}>{favCtx.totalFavourites}</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
