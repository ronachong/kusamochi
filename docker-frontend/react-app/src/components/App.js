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
    console.log("inside render modal is", modal);
    console.log(modal['on']);
    return (
      <MenuModal state={ modal['on'] } which={ modal['which'] } />
    );
  }

  renderSiteLayout(toggleModal){
    return(
      <div className="App" style={styles.appContainer}>
        <Header
          className="App-header"
          title={this.state.title}
          toggleModal={toggleModal}
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
    console.log("this.props.modal is", this.props.modal);
    console.log("this.props.toggleModal is", this.props.toggleModal);
    const { modal, placeholder } = this.props.modal;
    console.log("modal is", modal);
    // const { toggleModal } = this.props.toggleModal


    return (
        <div className="App" style={styles.appContainer}>
          { this.renderSiteModal(modal) }
          { this.renderSiteLayout(this.props.toggleModal) }
        </div>
    );
  }
}

export default App;
