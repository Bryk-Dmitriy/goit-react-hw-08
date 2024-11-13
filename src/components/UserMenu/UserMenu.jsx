import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const onLogout = () => dispatch(logout());

  return (
    <div className={css.menuWrapper}>
      <p className={css.menuText}>Hello, {userData.name} </p>
      <button className={css.logOutBtn} type="button" onClick={onLogout}>
        Log out
      </button>
    </div>
  );
};
