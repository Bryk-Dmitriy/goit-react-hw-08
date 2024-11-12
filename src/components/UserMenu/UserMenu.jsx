import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "../../redux/auth/selectors";
import { apiLogout } from "../../redux/auth/operations";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  const onLogout = () => dispatch(apiLogout());

  return (
    <div>
      <p>Hello {userData.name} </p>
      <button type="button" onClick={onLogout}>
        Log out
      </button>
    </div>
  );
};
