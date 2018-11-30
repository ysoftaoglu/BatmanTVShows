import React from 'react';
import { Link } from "react-router-dom";

// Styles
import './Card.sass'

const Card = ({ detail }) => (
  <div className="card">
    <Link className="card__img" to={"/shows/" + detail.show.id.toString()}>
      <img src={detail.show.image.medium} alt={detail.show.name} />
    </Link>
    <div className="card__body">
      <Link className="card__title" to={"/shows/" + detail.show.id.toString()}>{detail.show.name}</Link>
      <p className="card__info">Date: {detail.show.premiered} <span className="card__info-separator">&middot;</span> Rating: {detail.show.rating.average === null ? 'Unknown' : detail.show.rating.average}</p>
    </div>
  </div>
);

export default Card;