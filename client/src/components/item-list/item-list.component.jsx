import React from 'react';

import ItemCard from '../item-card/item-card-component';
import FilterSearchBox from '../filter-search-box/filter.search.box.component';

class ItemList extends React.Component {
  constructor() {
    super();
    this.state = {
      searchField: '',
    };
  }

  handleInputChange = (e) => {
    const searchField = e.target.value;
    this.setState({ searchField });
  };

  render() {
    return (
      <div>
        <ItemCard />
        <FilterSearchBox
          placeholder='Item Search'
          handleChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default ItemList;
