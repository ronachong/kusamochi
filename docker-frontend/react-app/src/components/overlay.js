import React from 'react';
import logo from '../logo.svg';
import '../App.css';

export function OverlayContainer(props) {
  const { state, toggleOverlay } = props;

  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <p>This is supposed to be the overlay.</p>
    </div>
  );
}
