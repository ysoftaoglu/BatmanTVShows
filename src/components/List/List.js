import React, { Component } from 'react';

// Store
import { connect } from 'react-redux';
import { getShows } from '../../store/actions/shows';

// Styles
import './List.sass'

// Components
import Filter from '../Filter/Filter'
import Card from '../Card/Card'
import Spinner from '../Spinner/Spinner'

class List extends Component {
  componentDidMount() {
    const { getShows } = this.props;
    const { sortKey } = this.props.shows;
    sortKey !== "" ? getShows(sortKey) : getShows("not-sorted");
  }
  render() {
    let { loading, shows } = this.props.shows;

    const cards = shows.map((detail) => <Card key={detail.show.id} detail={detail} />)

    return (
      loading ? <Spinner /> : (
        <section className="list">
          <Filter count={shows.length} />
          <div className="list__inner">
            {cards}
          </div>
        </section>
      )
    );
  }
}

const mapStateToProps = state => ({
  shows: state.shows,
});

export default connect(mapStateToProps, { getShows })(List);