import React from 'react';

import ItemCard from '../item-card/item-card-component';
import FilterSearchBox from '../filter-search-box/filter.search.box.component';

class ItemList extends React.Component {
  constructor() {
    super();
    this.state = {
      searchField: '',
      items: [],
    };
  }

  componentDidMount = () => {
    fetch('/api/items')
      .then((res) => res.json())
      .then((jsonRes) => {
        if (jsonRes.successful) {
          this.setState({ items: jsonRes.items });
        }
      });
  };

  handleInputChange = (e) => {
    const searchField = e.target.value;
    this.setState({ searchField });
  };

  filterItems = (item) => {
    let namematch = item.name
      .toLowerCase()
      .includes(this.state.searchField.toLowerCase());

    if (namematch) return true;
  };

  render() {
    const filteredItems = this.state.items.filter(this.filterItems);
    return (
      <div>
        <FilterSearchBox
          placeholder='Item Search'
          handleChange={this.handleInputChange}
        />
        {filteredItems.map((item) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </div>
    );
  }
}

export default ItemList;
