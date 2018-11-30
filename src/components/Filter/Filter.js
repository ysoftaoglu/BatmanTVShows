import React, { Component } from 'react';

// Styles
import './Filter.sass'

// Store
import { connect } from 'react-redux';
import { sortShows } from '../../store/actions/shows';

class Filter extends Component {
  onChange(e) {
    const sortKey = e.target.value;
    this.props.sortShows(sortKey);
  }

  render() {
    return (
      <section className="filter">
        <div className="filter__inner">
          <div className="filter__count">
            <b>{this.props.count}</b> Results
          </div>
          <div className="filter__form">
            <label>Sort By:</label>
            <select defaultValue={this.props.shows.sortKey} onChange={this.onChange.bind(this)}>
              <option disabled value="not-sorted">Please Select</option>
              <option value="rating">Rating</option>
              <option value="date">Date</option>
              <option value="a-z">A - Z</option>
            </select>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  shows: state.shows,
});

export default connect(mapStateToProps, { sortShows })(Filter);