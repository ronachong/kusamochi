import React, { Component } from 'react';

import '../App.css';

const styles = {
  torsoContainer : {
    height: '100%',
  },
}

class Torso extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    console.log(this.props);
    return (
      <div style={styles.torsoContainer}>
        <p>Some text here</p>
      </div>
    );
  }
}

export default Torso;
