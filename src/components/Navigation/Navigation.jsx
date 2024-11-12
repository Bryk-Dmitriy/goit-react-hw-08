import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserIsLoggedIn } from "../../redux/auth/selectors";
import clsx from "clsx";
import css from "./Navigation.module.css";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);

  return (
    <div className={css.navWrapper}>
      <NavLink
        className={({ isActive }) => clsx(css.navLinks, isActive && css.active)}
        to="/"
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={({ isActive }) =>
            clsx(css.navLinks, isActive && css.active)
          }
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}
    </div>
  );
};
