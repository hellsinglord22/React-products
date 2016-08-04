import React, { Component } from 'react';
import '../App.css';
import Nav from './Layout/nav';
import Center from './Layout/center';

class Layout extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Center />
      </div>
    );
  }
}

export default Layout;
