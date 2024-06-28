import css from "./searchBox.module.css";

export default function SearchBox({ value, onSearch }) {
  return (
    <div className={css.findBox}>
      <label>Find conracts by name</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
