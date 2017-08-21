import React, { Component } from 'react';
import Header from './components/header.js';
import Torso from './components/torso.js';
import Footer from './components/footer.js';
import './App.css';

import { Provider } from 'react-redux';
import CombinedReducer from './redux/reducers/combined';

const Store = createStore(CombinedReducer)

const styles = {
  appContainer : {
    height: '100%',
    display: 'flex',
    flexGrow: 1,      // allow site div to take up browser window
    flexDirection: 'column',
  },
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'kusamochi',
      viewMap: {
        'home': require('./components/tso-modules/home'),
        'morgue': require('./components/tso-modules/morgue'),
        'portfolio': require('./components/tso-modules/portfolio'),
        'diary': require('./components/tso-modules/diary'),
        'bbs': require('./components/tso-modules/bbs'),
      },
      view: 'bbs',
    };
  }
  render() {
    console.log(this.props);
    return (
      <Provider store={store}>
        <div className="App" style={styles.appContainer}>
          <Overlay />
          <Header
            className="App-header"
            title={this.state.title}
          />
          <Torso
            view={this.state.view}
            viewMap={this.state.viewMap}
          />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
