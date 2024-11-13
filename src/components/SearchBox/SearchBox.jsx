import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { filterContacts } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleInputChange = (event) => {
    dispatch(filterContacts(event.target.value));
  };

  return (
    <div className={css.searchBoxWrapper}>
      <p className={css.searchBoxText}>Find contacts by name</p>
      <input
        className={css.searchInput}
        type="text"
        value={filter}
        onChange={handleInputChange}
      />
    </div>
  );
}
