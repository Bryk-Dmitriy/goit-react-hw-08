import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { filterContacts, selectNameFilter } from "../../redux/filters/slice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleInputChange = (event) => {
    dispatch(filterContacts(event.target.value));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className={css.searchInput}
        type="text"
        value={filter}
        onChange={handleInputChange}
      />
    </div>
  );
}
