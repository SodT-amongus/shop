import { ProductTable } from "./ProductTable";
import { SearchBar } from "./SearchBar";

export const FilterableProductTable = ({
  data,
  checked,
  setChecked,
  search,
  setSearch,
  setDatabase,
  database,
}) => {
  return (
    <div style={{ padding: "20px" }}>
      <SearchBar
        checked={checked}
        setChecked={setChecked}
        search={search}
        setSearch={setSearch}
      />
      <ProductTable
        info={data}
        checked={checked}
        search={search}
        setDatabase={setDatabase}
        database={database}
      />
    </div>
  );
};
