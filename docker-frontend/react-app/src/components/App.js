import React, { Component } from 'react';
import MenuModal from './modal.js';
import SiteLayout from './site-layout.js';

//TODO: update calls to toggleModal with false, nav

import { StyleSheet, css } from 'aphrodite';
//import { colors, gradients, fonts } from '../styles/sitewide.js';
import { container } from '../styles/multi-component.js';

const styles = StyleSheet.create({
  appContainer: {...container.vflex, textAlign: 'center' },
})

const viewMap = {
  'home': require('./tso-modules/home'),
  'morgue': require('./tso-modules/morgue'),
  'portfolio': require('./tso-modules/portfolio'),
  'diary': require('./tso-modules/diary'),
  'bbs': require('./tso-modules/bbs'),
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'kusamochi',
      view: 'bbs',
    };
  }

  render() {
    const { modal } = this.props.modal;

    return (
      <div className={css(styles.appContainer)}>
        <MenuModal
          state={modal.get('on')}
          which={modal.get('which')}
          toggleModal={this.props.toggleModal}
        />
        <SiteLayout
          siteTitle={this.state.title}
          view={this.state.view}
          viewMap={viewMap}
          toggleModal={this.props.toggleModal}
        />
      </div>
    );
  }
}

export default App;
