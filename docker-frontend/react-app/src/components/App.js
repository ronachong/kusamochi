import React, { Component } from 'react';
import Overlay from './overlay.js';
import Header from './header.js';
import Torso from './torso.js';
import Footer from './footer.js';
import '../App.css';

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
        'home': require('./tso-modules/home'),
        'morgue': require('./tso-modules/morgue'),
        'portfolio': require('./tso-modules/portfolio'),
        'diary': require('./tso-modules/diary'),
        'bbs': require('./tso-modules/bbs'),
      },
      view: 'bbs',
    };
  }

  renderSiteOverlay(overlay){
    return (
      <Overlay state={ overlay['on'] } which={ overlay['which'] } />
    );
  }

  renderSiteLayout(){
    return(
      <div className="App" style={styles.appContainer}>
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
    )
  }

  render() {
    const { overlay, toggleOverlay } = this.props.overlay

    return (
        <div className="App" style={styles.appContainer}>
          { this.renderSiteOverlay(overlay) }
          { this.renderSiteLayout() }
        </div>
    );
  }
}

export default App;
