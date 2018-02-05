import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import tt from 'counterpart';
import { selectors as appSelectors } from 'app/redux/AppReducer';
import FilterPostsDropdownComponent from 'app/components/modules/FilterPostsDropdownComponent';
import resolveRoute from 'app/ResolveRoute';

const mapStateToProps = (state, ownProps) => {

    // Topic from react-router
    const route = resolveRoute(ownProps.location.pathname);
    let topic = route.params.length > 1 ? route.params[1] : '';

    // Current User from redux state
    const current_account_name = state.user.get('current')
        ? state.user.getIn(['current', 'username'])
        : state.offchain.get('account');

    // Sort orders from redux
    const sortOrders = state.app.get('sortOrders');

    const sortOrderToLink = (so, topic, account) => {
        if (so === 'home') return '/@' + account + '/feed';
        if (topic) return `/${so}/${topic}`;
        return `/${so}`;
    }

    //if (current_account_name)
        sort_orders.unshift(['home', tt('header_jsx.home')]);
    const sort_order_menu = sortOrders
        //.filter(so => so[0] !== sort_order)
        .map(so => ({
            link: sortOrderToLink(so[0], topic, current_account_name),
            value: so[1],
        }));

    return {
        current_account_name,
        selected_sort_orders,
        sort_order_menu,

        selected: appSelectors.getPostsFilter(state.app, ownProps.filter),
        postFilters,
        ...ownProps
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setPostsFilter(ownProps.selected))
    }
  }
}

const FilterPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DropdownMenu)

export default FilterPostsContainer
