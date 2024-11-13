import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export const AuthNav = () => {
  return (
    <div className={css.authNav}>
      <NavLink className={css.authLinks} to="/register">
        Sign Up
      </NavLink>
      <NavLink className={css.authLinks} to="/login">
        Log in
      </NavLink>
    </div>
  );
};
