import React from 'react';

const FilterSearchBox = ({ handleChange, placeholder }) => {
  return (
    <input
      type='search'
      name='searchField'
      id='search-input'
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default FilterSearchBox;
