import React from 'react';
import './LeftChild.css';

const LeftChild = ({ data, selectedId, onItemClick }) => {
  return (
    <div className="list-container">
      <h2>List of items:</h2>
      <ul>
        {data.map((item) => (
          <li
            key={item.id}
            className={`list-item ${item.id === selectedId ? 'selected' : ''}`}
            onClick={() => onItemClick(item.id)}
          >
            {item.Name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftChild;
