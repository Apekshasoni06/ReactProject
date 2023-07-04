import React from 'react';
import Data from './data';

const RightChild = ({ id }) => {
  const selectedItem = Data.find((item) => item.id === id);

  if (!selectedItem) {
    return <div>No item found</div>;
  }

  return (
    <div>
      <h1 class="h1">Cards:</h1>
    <div class="box">
    <h2>{selectedItem.Name}</h2>
    <p>Price: {selectedItem.Price}</p>
      
      <h3>Item id: {selectedItem.id}</h3>
     
      
    </div>
    </div>
  );
};

export default RightChild;
