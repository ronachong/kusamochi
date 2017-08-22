import React, { Component } from 'react';
import MenuModal from './modal.js';
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

  renderSiteModal(modal){
    return (
      <MenuModal
        state={modal.get('on')}
        which={modal.get('which')}
        toggleModal={this.props.toggleModal} />
    );
  }

  renderSiteLayout(){
    console.log(this.props.toggleModal);
    return(
      <div className="App" style={styles.appContainer}>
        <Header
          className="App-header"
          title={this.state.title}
          toggleModal={this.props.toggleModal}
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
    const { modal } = this.props.modal;

    return (
        <div className="App" style={styles.appContainer}>
          { this.renderSiteModal(modal) } // TODO: check why this.props.modal doesn't work
          { this.renderSiteLayout() }
        </div>
    );
  }
}

export default App;
