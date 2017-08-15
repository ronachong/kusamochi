import React, { Component } from 'react';

import '../App.css';

const styles = {
  contentContainer : {
    height: '100%',
  },
}

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    console.log(this.props);
    return (
      <div style={styles.contentContainer}>
        <p>Some text here</p>
      </div>
    );
  }
}

export default Content;
