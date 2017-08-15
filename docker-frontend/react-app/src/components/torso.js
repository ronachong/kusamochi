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
    const { view, viewMap } = this.props;
    console.log(viewMap[view]);
    return (
      <div style={styles.torsoContainer}>
        <p> hello </p>
        {React.createElement(viewMap[view].default)}
      </div>
    );
  }
};

//


export default Torso;
