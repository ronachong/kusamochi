import React, { Component } from 'react';
import Header from './components/header.js';
import Torso from './components/torso.js';
import Footer from './components/footer.js';
import './App.css';

const styles = {
  appContainer : {
    height: '100%',
    display: 'flex',
    flexGrow: 1,      // allow site div to take up browser window
    flexDirection: 'column',
  },
}

const moduleMap = {
  'home': '',
  'morgue': '',
  'portfolio': '',
  'diary': '',
  'BBS': '',
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'kusamochi',
      view: 'home'
    };
  }
  render() {
    return (
      <div className="App" style={styles.appContainer}>
        <Header
          className="App-header"
          title={this.state.title}
        />
        <Torso />
        <Footer />
      </div>
    );
  }
}

export default App;
