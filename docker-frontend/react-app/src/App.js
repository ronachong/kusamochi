import React, { Component } from 'react';
import Header from './components/header.js';
import Content from './components/content.js';
import Footer from './components/footer.js';
import './App.css';

const styles = {
  appContainer : {
    height: '100%',
    width: '100%',
    // display: 'flex',
    // flexGrow: 1,      // allow site div to take up browser window
    // flexDirection: 'row',
  },
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'kusamochi',
      modules: ['home', 'morgue', 'portfolio', 'diary', 'BBS'],
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
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
