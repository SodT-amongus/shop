import { DeleteButton } from "./DeleteButton";

export const ProductTable = ({
  database,
  setDatabase,
  info,
  checked,
  search,
}) => {
  const searchData = search
    ? info.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      )
    : info;
  const filteredData = checked
    ? searchData.filter((item) => item.stocked)
    : searchData;

  const handleDelete = (id) => {
    const filteredData = database.filter((item) => item.id !== id);
    setDatabase(filteredData);
    localStorage.setItem("database", JSON.stringify(filteredData));
  };

  const fruitData = filteredData.filter((item) => item.category == "Fruits");
  const vegetableData = filteredData.filter(
    (item) => item.category == "Vegetables",
  );
  return (
    <div>
      <table
        style={{
          marginTop: "20px",
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "lightgrey" }}>
            <th style={{ padding: "12px", textAlign: "left" }}>Name</th>
            <th style={{ padding: "12px", textAlign: "right" }}>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th
              colSpan={2}
              style={{
                textAlign: "center",
                fontWeight: "700",
                padding: "12px",
              }}
            >
              Fruits
            </th>
          </tr>
          {fruitData.map((item) => {
            return (
              <tr>
                <td
                  style={{
                    color: item.stocked ? "black" : "red",
                    padding: "12px",
                    borderTop: "1px solid lightgrey",
                  }}
                >
                  {item.name}
                </td>
                <td
                  style={{
                    padding: "12px",
                    borderTop: "1px solid lightgrey",
                    textAlign: "right",
                  }}
                >
                  {item.price.includes("$") ? item.price : `$${item.price}`}
                  <DeleteButton handleDelete={handleDelete} item={item} />
                </td>
              </tr>
            );
          })}
          <tr>
            <th
              colSpan={2}
              style={{
                textAlign: "center",
                fontWeight: "700",
                padding: "12px",
              }}
            >
              Vegetables
            </th>
          </tr>
          {vegetableData.map((item) => {
            return (
              <tr>
                <td
                  style={{
                    color: item.stocked ? "black" : "red",
                    padding: "12px",
                    borderTop: "1px solid lightgrey",
                  }}
                >
                  {item.name}
                </td>
                <td
                  style={{
                    padding: "12px",
                    borderTop: "1px solid lightgrey",
                    textAlign: "right",
                  }}
                >
                  {item.price.includes("$") ? item.price : `$${item.price}`}
                  <DeleteButton handleDelete={handleDelete} item={item} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
