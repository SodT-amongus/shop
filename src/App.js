import { useState } from "react";
import { FilterableProductTable } from "./components/FilterableProductTable";
import { AddItem } from "./components/AddItem";

export const App = () => {
  const dataFromLocalStorage =
    JSON.parse(localStorage.getItem("database")) || [];
  const [checked, setChecked] = useState(false);
  const [search, setSearch] = useState("");
  const [database, setDatabase] = useState(dataFromLocalStorage);

  console.log(database);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: "50px",
        height: "100vh",
        backgroundColor: "lightskyblue",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          border: "1px solid grey",
          width: "400px",
        }}
      >
        <AddItem setDatabase={setDatabase} />
      </div>

      <div
        style={{
          width: "400px",
          border: "1px solid grey",
          padding: "20px",
          backgroundColor: "white",
        }}
      >
        <h1 style={{ textAlign: "center" }}>PRODUCTS</h1>
        <FilterableProductTable
          data={database}
          checked={checked}
          setChecked={setChecked}
          search={search}
          setSearch={setSearch}
          setDatabase={setDatabase}
          database={database}
        />
      </div>
    </div>
  );
};
