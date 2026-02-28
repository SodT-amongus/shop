export const DeleteButton = ({ handleDelete, item }) => {
  return (
    <div>
      <button
        style={{
          backgroundColor: "lightsalmon",
          color: "black",
          border: "none",
          borderRadius: "5px",
          fontSize: 11,
        }}
        onClick={() => handleDelete(item.id)}
      >
        delete
      </button>
    </div>
  );
};
