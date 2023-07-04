import React, { useState } from "react";
import LeftChild from "./LeftChild";
import RightChild from "./RightChild";
import Data from "./data";

const App = () => {
  const [selectedId, setSelectedId] = useState(3);

  const handleItemClick = (id) => {
    setSelectedId(id);
  };

  return (
    <div>
      <LeftChild
        data={Data}
        selectedId={selectedId}
        onItemClick={handleItemClick}
      />
      <RightChild id={selectedId} />
    </div>
  );
};

export default App;
