import { NavLink } from "react-router-dom";
import css from "./AuthorizationNav.module.css";

export const AuthorizationNav = () => {
  return (
    <div className={css.authNav}>
      <NavLink className={css.authLinks} to="/registration">
        Sign Up
      </NavLink>
      <NavLink className={css.authLinks} to="/login">
        Log in
      </NavLink>
    </div>
  );
};
