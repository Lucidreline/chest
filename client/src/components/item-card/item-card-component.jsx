import React from 'react';

const ItemCard = ({ item }) => {
  return (
    <div>
      <img src={item.imageUrl} alt={item.name} />
      <h3>{item.name}</h3>
      <span>{`${item.price}`}</span>
    </div>
  );
};

export default ItemCard;
