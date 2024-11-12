import { NavLink } from "react-router-dom";

export const AuthorizationNav = () => {
  return (
    <div>
      <NavLink to="/registration">Sign Up</NavLink>
      <NavLink to="/login">Log in</NavLink>
    </div>
  );
};
