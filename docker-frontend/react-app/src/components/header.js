import React, { Component } from 'react';
import '../App.css';

import { StyleSheet, css } from 'aphrodite';


const colors = {
  ksm_green_lite: '205,235,142',
  ksm_green_med: '165,201,86'
}

const gradients = {
  ksm_green: `top, rgba(234,234,234,0) 70%, rgba(234,234,234,0.13) 84%, rgba(${colors.ksm_green_lite},0.77) 98%, rgba(${colors.ksm_green_lite},1) 100%`
}

const fonts = {
  heading_enc: "'Encode Sans', sans-serif"
}

const styles = StyleSheet.create({
  headerLink: {
    textDecoration: 'none'
  },

  header: {
    display: 'flex',
    flexDirection: 'column',
    background: `-moz-linear-gradient(${gradients.ksm_green})`, /* FF3.6-15 */
    background: `-webkit-linear-gradient(${gradients.ksm_green})`, /* Chrome10-25,Safari5.1-6 */
    background: `linear-gradient(${gradients.ksm_green})`, /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#00eaeaea', endColorstr='#a5c956',GradientType=0 )", /* IE6-9 */
    //backgroundColor: 'white',
    color: 'green'
  },

  headerTitle: {
    color: `rgb(${colors.ksm_green_med})`,
    fontFamily: fonts.heading_enc,
    letterSpacing: '.3em',
    padding: '2vh'
  }

})

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  mouseEnter() {
    console.log("Mouse enter.");
    // let's have nav icon appear
    this.props.toggleModal(true, 'nav');
  }
  mouseLeave() {
    console.log("Mouse leave.");
    // let's have nav icon disappear
  }
  onClick() {
    console.log("Mouse click.")
    // let's have nav appear
    this.props.toggleModal(true, 'nav');
  }
  render() {
    return (
      <a
        className={css(styles.headerLink)}
        href='#'
        onMouseEnter={() => this.mouseEnter()}
        onMouseLeave={() => this.mouseLeave()}
        onClick={() => this.onClick()}
      >
        <header className={css(styles.header)}>
          <br />
          <label>Site Nav</label>
          <h1 className={css(styles.headerTitle)}>{this.props.title}</h1>
        </header>
      </a>
    );
  }
}

export default Header;
