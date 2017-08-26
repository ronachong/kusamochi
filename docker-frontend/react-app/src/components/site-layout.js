import React from 'react';
import Header from './header.js';
import Torso from './torso.js';
import Footer from './footer.js';

import { StyleSheet, css } from 'aphrodite';
//import { colors, gradients, fonts } from '../styles/sitewide.js';
import { container } from '../styles/multi-component.js';

const styles = StyleSheet.create({
  layoutContainer: container.vflex,
})

const SiteLayout = ({siteTitle, view, viewMap, toggleModal}) => (
  <div className={css(styles.layoutContainer)}>
    <Header
      className="App-header"
      title={siteTitle}
      toggleModal={toggleModal}
    />
    <Torso
      view={view}
      viewMap={viewMap}
    />
    <Footer />
  </div>
)

export default SiteLayout;
