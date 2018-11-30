import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { Helmet } from 'react-helmet';

// Store
import { connect } from 'react-redux';
import { getShow } from '../../store/actions/shows';

// Styles
import './Detail.sass'

// Components
import Spinner from '../Spinner/Spinner'

class Detail extends Component {
  componentDidMount() {
    const showId = this.props.match.params.id;
    this.props.getShow(showId);
  }
  render() {
    let { show, loading } = this.props.shows;

    return (
      loading ? <Spinner /> : (
        <React.Fragment>
          <Helmet>
            <title>{show.name}</title>
          </Helmet>
          <section className="detail">
            <div className="detail__inner">
              <img className="detail__img" src={show.image.medium} alt={show.name}/>
              <div className="detail__body">
                <h3 className="detail__title">{show.name}</h3>
                <p className="detail__info">
                  Date: {show.premiered} <span className="detail__info-separator">&middot;</span> Rating: {show.rating.average === null ? 'Unknown' : show.rating.average} <span className="detail__info-separator">&middot;</span> Type: {show.type}
                </p>
                <div className="detail__summary" dangerouslySetInnerHTML={{ __html: show.summary }} />
                <div className="detail__links">
                  <a className="detail__btn detail__btn--blue" href={show.url} target="_blank" rel="noopener noreferrer">Original Page</a>
                  <a className="detail__btn detail__btn--green" href={"https://www.imdb.com/title/" + show.externals.imdb} target="_blank" rel="noopener noreferrer">IMBb Page</a>
                  <Link className="detail__btn detail__btn--gray" to="/">Go Home</Link>
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      )
    );
  }
}

const mapStateToProps = state => ({
  shows: state.shows,
});

export default withRouter(connect(mapStateToProps, { getShow })(Detail));