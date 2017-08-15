import React, { Component } from 'react';

const styles = {
  modContainer : {
    height: '100%',
  },
}

class MorgueModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    console.log(this.props);
    return (
      <div style={styles.modContainer}>
        <p>This is the morgue module.</p>
      </div>
    );
  }
};

export default MorgueModule;
