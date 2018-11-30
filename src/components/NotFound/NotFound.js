import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

// Styles
import './NotFound.sass'

// Search Icon
import SadIcon from '../../assets/img/sad.png';

const NotFound = () => (
  <React.Fragment>
    <Helmet>
      <title>Not Found :(</title>
    </Helmet>
    <div className="not-found">
      <img src={SadIcon} alt="Search Icon" />
      <h3>
        The page does not exist :(
      </h3>
      <Link to="/">&larr; Go Home</Link>
    </div>
  </React.Fragment>
);

export default NotFound;