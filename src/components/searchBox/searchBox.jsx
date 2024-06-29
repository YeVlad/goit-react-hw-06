import css from "./searchBox.module.css";

import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();

  function onSearch(event) {
    dispatch(changeFilter(String(event.target.value)));
  }
  return (
    <div className={css.findBox}>
      <label>Find contacts by name</label>
      <input type="text" onChange={onSearch} />
    </div>
  );
}
