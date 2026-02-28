export const SearchBar = ({ checked, setChecked, search, setSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        style={{ width: "100%", marginBottom: "10px", padding: "6px" }}
      ></input>
      <div>
        <input
          style={{ marginTop: "10px", padding: "12px" }}
          type="checkbox"
          onChange={(event) => setChecked(event.target.checked)}
          value={checked}
        ></input>
        <span> Only show products in stock</span>
      </div>
    </div>
  );
};
