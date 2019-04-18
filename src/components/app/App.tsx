import React, { Component, ReactNode } from 'react';
import { hot } from 'react-hot-loader/root';

class App extends Component {
  public render(): ReactNode {
    return (
      <div id="app">
        <span>App</span>
      </div>
    );
  }
}

export default hot(App);
