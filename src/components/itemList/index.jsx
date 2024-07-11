// 1.**Basic Component**

import React from "react";

const ItemList = ({ item }) => {
  return (
    <div>
      <h3>List of Items</h3>
      <ul>
        {item.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
