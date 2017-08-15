import React, { Component } from 'react';

const styles = {
  modContainer : {
    height: '100%',
  },
}

class DiaryModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    console.log(this.props);
    return (
      <div style={styles.modContainer}>
        <p>This is the diary module.</p>
      </div>
    );
  }
};

export default DiaryModule;
