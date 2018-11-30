import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { HashRouter, Route, Switch } from 'react-router-dom';

// Store
import { Provider } from 'react-redux';
import store from '../../store';

// Styles
import './App.sass'

// Components
import Header from '../Header/Header'
import List from '../List/List'
import Detail from '../Detail/Detail'
import NotFound from '../NotFound/NotFound'
import About from '../About/About'
import Footer from '../Footer/Footer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <React.Fragment>
            <Helmet>
              <title>Batman TV Shows</title>
            </Helmet>
            <Header />
            <Switch>
              <Route exact path="/" component={List} />
              <Route exact path="/shows/:id" component={Detail} />
              <Route exact path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </React.Fragment>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
