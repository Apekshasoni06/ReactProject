import React from "react";

const RightChild = ({ selectedItem }) => {
  if (!selectedItem) {
    return <div>No item found</div>;
  }

  return (
    <div>
      <h1 className="h1">Cards:</h1>
      <div className="box">
        <h2>{selectedItem.Name}</h2>
        <p>Price: {selectedItem.Price}</p>
        <h3>Item id: {selectedItem.id}</h3>
      </div>
    </div>
  );
};

export default RightChild;
