import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const AddItem = ({ setDatabase }) => {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stocked, setStocked] = useState(false);

  const handleSubmit = () => {
    const newItem = { id: uuidv4(), category, name, price, stocked };
    if (!category || !name || !price) {
      alert("fill it out completely please");
    } else {
      // setDatabase((latestData) => [...latestData, newItem]);
      setDatabase((latestData) => {
        const updatedData = [...latestData, newItem];
        localStorage.setItem("database", JSON.stringify(updatedData));
        return updatedData;
      });
      setCategory("");
      setName("");
      setPrice("");
      setStocked("false");
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Add New Item</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid lightgrey",
          padding: "12px",
        }}
      >
        <label>Category:</label>
        <select
          style={{ height: "24px" }}
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        >
          <option value="">Select Category</option>
          <option value="Fruits">Fruits</option>
          <option value="Vegetables">Vegetables</option>
        </select>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "12px",
          borderTop: "1px solid lightgrey",
          alignItems: "center",
        }}
      >
        <p>Name:</p>
        <input
          type="text"
          placeholder="Enter item name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></input>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          borderTop: "1px solid lightgrey",
          padding: "12px",
          alignItems: "center",
        }}
      >
        <p>Price:</p>
        <input
          type="number"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        ></input>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          borderTop: "1px solid lightgrey",
          borderBottom: "1px solid lightgrey",
          padding: "12px",
          alignItems: "center",
        }}
      >
        <p>In Stock:</p>
        <div>
          <input
            type="checkbox"
            onChange={(e) => setStocked(e.target.checked)}
            value={stocked}
          ></input>
          <span>In Stock</span>
        </div>
      </div>
      <div
        style={{ padding: "12px", display: "flex", justifyContent: "center" }}
      >
        <button onClick={handleSubmit} style={{ width: "150px" }}>
          {""}
          Add item
        </button>
      </div>
    </div>
  );
};
