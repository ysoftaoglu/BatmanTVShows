import React from 'react';
import { Helmet } from 'react-helmet';

// Styles
import './About.sass'

// Profile Img
import Me from '../../assets/img/me.jpg';

const About = () => (
  <React.Fragment>
    <Helmet>
      <title>About This Project</title>
    </Helmet>
    <div className="about">
      <div className="about__inner">
        <div className="about__profile">
          <img className="about__profile-img" src={Me} alt="Yasin Softaoğlu"/>
          <div className="about__profile-body">
            <h2 className="about__profile-name">Yasin Softaoğlu</h2>
            <p className="about__profile-text">
              This project has been created for Enuygun.com job application.
              <a href="https://github.com/ysoftaoglu/BatmanTVShows">
                See on Github.
              </a>
            </p>
            <div className="about__tools">
              <h3 className="about__tools-title">Tools Of Used</h3>
              <ul className="about__tools-list">
                <li>React</li>
                <li>React Router</li>
                <li>React Helmet</li>
                <li>Redux</li>
                <li>Redux Thunk</li>
                <li>Sass</li>
                <li>Axios</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default About;