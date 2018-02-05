import React from 'react'
import PropTypes from 'prop-types'
import DropdownMenu from 'app/components/elements/DropdownMenu';

const FilterPostsDropdownComponent = ({postFilters, selectedFilter}) => {
  return (
        <DropdownMenu
            className="Header__sort-order-menu menu-hide-for-large"
            items={postFilters}
            selected={selectedFilter}
            el="li"
        />);
}

FilterPostsDropdownComponent.propTypes = {
    postFilters: PropTypes.arrayOf(PropTypes.object).isRequired,
    selectedFilter: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default FilterPostsDropdownComponent;